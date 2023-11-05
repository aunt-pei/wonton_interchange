import * as fs from 'fs';
import { execSync } from 'child_process';

function findFiles(path: string, filter?: (path: string) => boolean): string[] {
  return fs
    .readdirSync(path, {
      recursive: true,
    })
    .map((p) => `${path}/${p.toString()}`)
    .filter(filter || (() => true));
}

function resetDir(path: string): void {
  fs.rmSync(path, { recursive: true, force: true });
  fs.mkdirSync(path, {
    recursive: true,
  });
}

function runCommand(bin: string, args?: string[]): boolean {
  args = args || [];

  if (
    args.reduce((hasSpace, arg) => hasSpace || arg.indexOf(' ') >= 0, false)
  ) {
    throw 'Argument has space.';
  }

  return execSync([bin, ...args].join(' ')).toString().length === 0;
}

function genJs(protoFiles: string[]): boolean {
  const jsDir = '../../src/js/src';
  const jsFile = `${jsDir}/index.js`;
  const tsFile = `${jsDir}/index.d.ts`;

  resetDir(jsDir);

  return (
    runCommand('npx pbjs', [
      '-t=static-module',
      '-w=es6',
      '-r=wonton_interchange_protobufs',
      '--force-long',
      '--force-message',
      '--no-create',
      '--no-verify',
      '--no-delimited',
      `-o=${jsFile}`,
      // Effectively the same as `$(find ../lib/proto -iname "*.proto")`.
      ...protoFiles,
    ]) && runCommand('npx pbts', [`-o=${tsFile}`, jsFile])
  );
}

const protoFiles = findFiles('../../src/proto', (path) =>
  path.endsWith('.proto'),
);

if (!genJs(protoFiles)) {
  throw 'Error generating js files.';
}
