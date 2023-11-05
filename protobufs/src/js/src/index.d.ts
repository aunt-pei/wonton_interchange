import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace com. */
export namespace com {

    /** Namespace auntpei. */
    namespace auntpei {

        /** Namespace wonton. */
        namespace wonton {

            /** Properties of an ApiPledgeInvalidationRequest. */
            interface IApiPledgeInvalidationRequest {

                /** ApiPledgeInvalidationRequest pledgeId */
                pledgeId?: (com.auntpei.wonton.PledgeId|null);

                /** ApiPledgeInvalidationRequest reason */
                reason?: (string|null);
            }

            /** Represents an ApiPledgeInvalidationRequest. */
            class ApiPledgeInvalidationRequest implements IApiPledgeInvalidationRequest {

                /**
                 * Constructs a new ApiPledgeInvalidationRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IApiPledgeInvalidationRequest);

                /** ApiPledgeInvalidationRequest pledgeId. */
                public pledgeId?: (com.auntpei.wonton.PledgeId|null);

                /** ApiPledgeInvalidationRequest reason. */
                public reason: string;

                /**
                 * Encodes the specified ApiPledgeInvalidationRequest message. Does not implicitly {@link com.auntpei.wonton.ApiPledgeInvalidationRequest.verify|verify} messages.
                 * @param message ApiPledgeInvalidationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.ApiPledgeInvalidationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ApiPledgeInvalidationRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ApiPledgeInvalidationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.ApiPledgeInvalidationRequest;

                /**
                 * Creates an ApiPledgeInvalidationRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ApiPledgeInvalidationRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.ApiPledgeInvalidationRequest;

                /**
                 * Creates a plain object from an ApiPledgeInvalidationRequest message. Also converts values to other types if specified.
                 * @param message ApiPledgeInvalidationRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.ApiPledgeInvalidationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ApiPledgeInvalidationRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ApiPledgeInvalidationRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ApiPledgeInvalidationResponse. */
            interface IApiPledgeInvalidationResponse {
            }

            /** Represents an ApiPledgeInvalidationResponse. */
            class ApiPledgeInvalidationResponse implements IApiPledgeInvalidationResponse {

                /**
                 * Constructs a new ApiPledgeInvalidationResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IApiPledgeInvalidationResponse);

                /**
                 * Encodes the specified ApiPledgeInvalidationResponse message. Does not implicitly {@link com.auntpei.wonton.ApiPledgeInvalidationResponse.verify|verify} messages.
                 * @param message ApiPledgeInvalidationResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.ApiPledgeInvalidationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ApiPledgeInvalidationResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ApiPledgeInvalidationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.ApiPledgeInvalidationResponse;

                /**
                 * Creates an ApiPledgeInvalidationResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ApiPledgeInvalidationResponse
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.ApiPledgeInvalidationResponse;

                /**
                 * Creates a plain object from an ApiPledgeInvalidationResponse message. Also converts values to other types if specified.
                 * @param message ApiPledgeInvalidationResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.ApiPledgeInvalidationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ApiPledgeInvalidationResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ApiPledgeInvalidationResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ApiPledgeStructureConditionRequest. */
            interface IApiPledgeStructureConditionRequest {

                /** ApiPledgeStructureConditionRequest pledgeId */
                pledgeId?: (com.auntpei.wonton.PledgeId|null);

                /** ApiPledgeStructureConditionRequest commitmentConditionFormatStructured */
                commitmentConditionFormatStructured?: (com.auntpei.wonton.PledgeCondition|null);
            }

            /** Represents an ApiPledgeStructureConditionRequest. */
            class ApiPledgeStructureConditionRequest implements IApiPledgeStructureConditionRequest {

                /**
                 * Constructs a new ApiPledgeStructureConditionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IApiPledgeStructureConditionRequest);

                /** ApiPledgeStructureConditionRequest pledgeId. */
                public pledgeId?: (com.auntpei.wonton.PledgeId|null);

                /** ApiPledgeStructureConditionRequest commitmentConditionFormatStructured. */
                public commitmentConditionFormatStructured?: (com.auntpei.wonton.PledgeCondition|null);

                /**
                 * Encodes the specified ApiPledgeStructureConditionRequest message. Does not implicitly {@link com.auntpei.wonton.ApiPledgeStructureConditionRequest.verify|verify} messages.
                 * @param message ApiPledgeStructureConditionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.ApiPledgeStructureConditionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ApiPledgeStructureConditionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ApiPledgeStructureConditionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.ApiPledgeStructureConditionRequest;

                /**
                 * Creates an ApiPledgeStructureConditionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ApiPledgeStructureConditionRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.ApiPledgeStructureConditionRequest;

                /**
                 * Creates a plain object from an ApiPledgeStructureConditionRequest message. Also converts values to other types if specified.
                 * @param message ApiPledgeStructureConditionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.ApiPledgeStructureConditionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ApiPledgeStructureConditionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ApiPledgeStructureConditionRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ApiPledgeStructureConditionResponse. */
            interface IApiPledgeStructureConditionResponse {
            }

            /** Represents an ApiPledgeStructureConditionResponse. */
            class ApiPledgeStructureConditionResponse implements IApiPledgeStructureConditionResponse {

                /**
                 * Constructs a new ApiPledgeStructureConditionResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IApiPledgeStructureConditionResponse);

                /**
                 * Encodes the specified ApiPledgeStructureConditionResponse message. Does not implicitly {@link com.auntpei.wonton.ApiPledgeStructureConditionResponse.verify|verify} messages.
                 * @param message ApiPledgeStructureConditionResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.ApiPledgeStructureConditionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ApiPledgeStructureConditionResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ApiPledgeStructureConditionResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.ApiPledgeStructureConditionResponse;

                /**
                 * Creates an ApiPledgeStructureConditionResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ApiPledgeStructureConditionResponse
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.ApiPledgeStructureConditionResponse;

                /**
                 * Creates a plain object from an ApiPledgeStructureConditionResponse message. Also converts values to other types if specified.
                 * @param message ApiPledgeStructureConditionResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.ApiPledgeStructureConditionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ApiPledgeStructureConditionResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ApiPledgeStructureConditionResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ApiStageGetRequest. */
            interface IApiStageGetRequest {
            }

            /** Represents an ApiStageGetRequest. */
            class ApiStageGetRequest implements IApiStageGetRequest {

                /**
                 * Constructs a new ApiStageGetRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IApiStageGetRequest);

                /**
                 * Encodes the specified ApiStageGetRequest message. Does not implicitly {@link com.auntpei.wonton.ApiStageGetRequest.verify|verify} messages.
                 * @param message ApiStageGetRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.ApiStageGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ApiStageGetRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ApiStageGetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.ApiStageGetRequest;

                /**
                 * Creates an ApiStageGetRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ApiStageGetRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.ApiStageGetRequest;

                /**
                 * Creates a plain object from an ApiStageGetRequest message. Also converts values to other types if specified.
                 * @param message ApiStageGetRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.ApiStageGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ApiStageGetRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ApiStageGetRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ApiStageGetResponse. */
            interface IApiStageGetResponse {

                /** ApiStageGetResponse stageInfo */
                stageInfo?: (com.auntpei.wonton.StageInfo|null);
            }

            /** Represents an ApiStageGetResponse. */
            class ApiStageGetResponse implements IApiStageGetResponse {

                /**
                 * Constructs a new ApiStageGetResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IApiStageGetResponse);

                /** ApiStageGetResponse stageInfo. */
                public stageInfo?: (com.auntpei.wonton.StageInfo|null);

                /**
                 * Encodes the specified ApiStageGetResponse message. Does not implicitly {@link com.auntpei.wonton.ApiStageGetResponse.verify|verify} messages.
                 * @param message ApiStageGetResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.ApiStageGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ApiStageGetResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ApiStageGetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.ApiStageGetResponse;

                /**
                 * Creates an ApiStageGetResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ApiStageGetResponse
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.ApiStageGetResponse;

                /**
                 * Creates a plain object from an ApiStageGetResponse message. Also converts values to other types if specified.
                 * @param message ApiStageGetResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.ApiStageGetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ApiStageGetResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ApiStageGetResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an InvestmentsBackdropInfo. */
            interface IInvestmentsBackdropInfo {

                /** InvestmentsBackdropInfo investmentDeadlineUsec */
                investmentDeadlineUsec?: (Long|null);
            }

            /** Represents an InvestmentsBackdropInfo. */
            class InvestmentsBackdropInfo implements IInvestmentsBackdropInfo {

                /**
                 * Constructs a new InvestmentsBackdropInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IInvestmentsBackdropInfo);

                /** InvestmentsBackdropInfo investmentDeadlineUsec. */
                public investmentDeadlineUsec: Long;

                /**
                 * Encodes the specified InvestmentsBackdropInfo message. Does not implicitly {@link com.auntpei.wonton.InvestmentsBackdropInfo.verify|verify} messages.
                 * @param message InvestmentsBackdropInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.InvestmentsBackdropInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InvestmentsBackdropInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InvestmentsBackdropInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.InvestmentsBackdropInfo;

                /**
                 * Creates an InvestmentsBackdropInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InvestmentsBackdropInfo
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.InvestmentsBackdropInfo;

                /**
                 * Creates a plain object from an InvestmentsBackdropInfo message. Also converts values to other types if specified.
                 * @param message InvestmentsBackdropInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.InvestmentsBackdropInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InvestmentsBackdropInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for InvestmentsBackdropInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UniversityStatus. */
            interface IUniversityStatus {
            }

            /** Represents an UniversityStatus. */
            class UniversityStatus implements IUniversityStatus {

                /**
                 * Constructs a new UniversityStatus.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IUniversityStatus);

                /**
                 * Encodes the specified UniversityStatus message. Does not implicitly {@link com.auntpei.wonton.UniversityStatus.verify|verify} messages.
                 * @param message UniversityStatus message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.UniversityStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UniversityStatus message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UniversityStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.UniversityStatus;

                /**
                 * Creates an UniversityStatus message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UniversityStatus
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.UniversityStatus;

                /**
                 * Creates a plain object from an UniversityStatus message. Also converts values to other types if specified.
                 * @param message UniversityStatus
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.UniversityStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UniversityStatus to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UniversityStatus
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace UniversityStatus {

                /** Enum enum. */
                enum Enum {
                    UNKNOWN = 0,
                    ENABLED = 1,
                    DISABLED = 2
                }
            }

            /** Properties of an UniversityStatusEventReason. */
            interface IUniversityStatusEventReason {
            }

            /** Represents an UniversityStatusEventReason. */
            class UniversityStatusEventReason implements IUniversityStatusEventReason {

                /**
                 * Constructs a new UniversityStatusEventReason.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IUniversityStatusEventReason);

                /**
                 * Encodes the specified UniversityStatusEventReason message. Does not implicitly {@link com.auntpei.wonton.UniversityStatusEventReason.verify|verify} messages.
                 * @param message UniversityStatusEventReason message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.UniversityStatusEventReason, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UniversityStatusEventReason message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UniversityStatusEventReason
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.UniversityStatusEventReason;

                /**
                 * Creates an UniversityStatusEventReason message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UniversityStatusEventReason
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.UniversityStatusEventReason;

                /**
                 * Creates a plain object from an UniversityStatusEventReason message. Also converts values to other types if specified.
                 * @param message UniversityStatusEventReason
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.UniversityStatusEventReason, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UniversityStatusEventReason to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UniversityStatusEventReason
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace UniversityStatusEventReason {

                /** Enum enum. */
                enum Enum {
                    UNKNOWN = 0,
                    INITIAL_ACCESS = 1
                }
            }

            /** Properties of an UniversityStatusEvent. */
            interface IUniversityStatusEvent {

                /** UniversityStatusEvent status */
                status?: (com.auntpei.wonton.UniversityStatus.Enum|null);

                /** UniversityStatusEvent eventTimestampUsec */
                eventTimestampUsec?: (Long|null);

                /** UniversityStatusEvent reasonEnum */
                reasonEnum?: (com.auntpei.wonton.UniversityStatusEventReason.Enum|null);

                /** UniversityStatusEvent reasonString */
                reasonString?: (string|null);
            }

            /** Represents an UniversityStatusEvent. */
            class UniversityStatusEvent implements IUniversityStatusEvent {

                /**
                 * Constructs a new UniversityStatusEvent.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IUniversityStatusEvent);

                /** UniversityStatusEvent status. */
                public status: com.auntpei.wonton.UniversityStatus.Enum;

                /** UniversityStatusEvent eventTimestampUsec. */
                public eventTimestampUsec: Long;

                /** UniversityStatusEvent reasonEnum. */
                public reasonEnum?: (com.auntpei.wonton.UniversityStatusEventReason.Enum|null);

                /** UniversityStatusEvent reasonString. */
                public reasonString?: (string|null);

                /** UniversityStatusEvent reason. */
                public reason?: ("reasonEnum"|"reasonString");

                /**
                 * Encodes the specified UniversityStatusEvent message. Does not implicitly {@link com.auntpei.wonton.UniversityStatusEvent.verify|verify} messages.
                 * @param message UniversityStatusEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.UniversityStatusEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UniversityStatusEvent message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UniversityStatusEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.UniversityStatusEvent;

                /**
                 * Creates an UniversityStatusEvent message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UniversityStatusEvent
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.UniversityStatusEvent;

                /**
                 * Creates a plain object from an UniversityStatusEvent message. Also converts values to other types if specified.
                 * @param message UniversityStatusEvent
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.UniversityStatusEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UniversityStatusEvent to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UniversityStatusEvent
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UniversityBackdropInfo. */
            interface IUniversityBackdropInfo {

                /** UniversityBackdropInfo domainName */
                domainName?: (string|null);

                /** UniversityBackdropInfo statuses */
                statuses?: (com.auntpei.wonton.UniversityStatusEvent[]|null);

                /** UniversityBackdropInfo countryCode */
                countryCode?: (string|null);
            }

            /** Represents an UniversityBackdropInfo. */
            class UniversityBackdropInfo implements IUniversityBackdropInfo {

                /**
                 * Constructs a new UniversityBackdropInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IUniversityBackdropInfo);

                /** UniversityBackdropInfo domainName. */
                public domainName: string;

                /** UniversityBackdropInfo statuses. */
                public statuses: com.auntpei.wonton.UniversityStatusEvent[];

                /** UniversityBackdropInfo countryCode. */
                public countryCode: string;

                /**
                 * Encodes the specified UniversityBackdropInfo message. Does not implicitly {@link com.auntpei.wonton.UniversityBackdropInfo.verify|verify} messages.
                 * @param message UniversityBackdropInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.UniversityBackdropInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UniversityBackdropInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UniversityBackdropInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.UniversityBackdropInfo;

                /**
                 * Creates an UniversityBackdropInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UniversityBackdropInfo
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.UniversityBackdropInfo;

                /**
                 * Creates a plain object from an UniversityBackdropInfo message. Also converts values to other types if specified.
                 * @param message UniversityBackdropInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.UniversityBackdropInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UniversityBackdropInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UniversityBackdropInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BackdropInfo. */
            interface IBackdropInfo {

                /** BackdropInfo investmentsInfo */
                investmentsInfo?: (com.auntpei.wonton.InvestmentsBackdropInfo|null);

                /** BackdropInfo universityInfos */
                universityInfos?: (com.auntpei.wonton.UniversityBackdropInfo[]|null);
            }

            /** Represents a BackdropInfo. */
            class BackdropInfo implements IBackdropInfo {

                /**
                 * Constructs a new BackdropInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IBackdropInfo);

                /** BackdropInfo investmentsInfo. */
                public investmentsInfo?: (com.auntpei.wonton.InvestmentsBackdropInfo|null);

                /** BackdropInfo universityInfos. */
                public universityInfos: com.auntpei.wonton.UniversityBackdropInfo[];

                /**
                 * Encodes the specified BackdropInfo message. Does not implicitly {@link com.auntpei.wonton.BackdropInfo.verify|verify} messages.
                 * @param message BackdropInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.BackdropInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BackdropInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BackdropInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.BackdropInfo;

                /**
                 * Creates a BackdropInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BackdropInfo
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.BackdropInfo;

                /**
                 * Creates a plain object from a BackdropInfo message. Also converts values to other types if specified.
                 * @param message BackdropInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.BackdropInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BackdropInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BackdropInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeId. */
            interface IPledgeId {

                /** PledgeId versionForm */
                versionForm?: (string|null);
            }

            /** Represents a PledgeId. */
            class PledgeId implements IPledgeId {

                /**
                 * Constructs a new PledgeId.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeId);

                /** PledgeId versionForm. */
                public versionForm?: (string|null);

                /** PledgeId version. */
                public version?: "versionForm";

                /**
                 * Encodes the specified PledgeId message. Does not implicitly {@link com.auntpei.wonton.PledgeId.verify|verify} messages.
                 * @param message PledgeId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeId, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeId message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeId;

                /**
                 * Creates a PledgeId message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeId
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeId;

                /**
                 * Creates a plain object from a PledgeId message. Also converts values to other types if specified.
                 * @param message PledgeId
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeId, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeId to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeId
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeCreator. */
            interface IPledgeCreator {

                /** PledgeCreator type */
                type?: (com.auntpei.wonton.UserType.Enum|null);

                /** PledgeCreator username */
                username?: (string|null);

                /** PledgeCreator password */
                password?: (string|null);
            }

            /** Represents a PledgeCreator. */
            class PledgeCreator implements IPledgeCreator {

                /**
                 * Constructs a new PledgeCreator.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeCreator);

                /** PledgeCreator type. */
                public type: com.auntpei.wonton.UserType.Enum;

                /** PledgeCreator username. */
                public username: string;

                /** PledgeCreator password. */
                public password: string;

                /**
                 * Encodes the specified PledgeCreator message. Does not implicitly {@link com.auntpei.wonton.PledgeCreator.verify|verify} messages.
                 * @param message PledgeCreator message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeCreator, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeCreator message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeCreator
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeCreator;

                /**
                 * Creates a PledgeCreator message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeCreator
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeCreator;

                /**
                 * Creates a plain object from a PledgeCreator message. Also converts values to other types if specified.
                 * @param message PledgeCreator
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeCreator, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeCreator to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeCreator
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeSource. */
            interface IPledgeSource {
            }

            /** Represents a PledgeSource. */
            class PledgeSource implements IPledgeSource {

                /**
                 * Constructs a new PledgeSource.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeSource);

                /**
                 * Encodes the specified PledgeSource message. Does not implicitly {@link com.auntpei.wonton.PledgeSource.verify|verify} messages.
                 * @param message PledgeSource message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeSource, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeSource message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeSource
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeSource;

                /**
                 * Creates a PledgeSource message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeSource
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeSource;

                /**
                 * Creates a plain object from a PledgeSource message. Also converts values to other types if specified.
                 * @param message PledgeSource
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeSource to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeSource
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace PledgeSource {

                /** Enum enum. */
                enum Enum {
                    UNKNOWN = 0,
                    FORM = 1,
                    API = 2
                }
            }

            /** Properties of a PledgeMetadata. */
            interface IPledgeMetadata {

                /** PledgeMetadata creator */
                creator?: (com.auntpei.wonton.PledgeCreator|null);

                /** PledgeMetadata source */
                source?: (com.auntpei.wonton.PledgeSource.Enum|null);
            }

            /** Represents a PledgeMetadata. */
            class PledgeMetadata implements IPledgeMetadata {

                /**
                 * Constructs a new PledgeMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeMetadata);

                /** PledgeMetadata creator. */
                public creator?: (com.auntpei.wonton.PledgeCreator|null);

                /** PledgeMetadata source. */
                public source: com.auntpei.wonton.PledgeSource.Enum;

                /**
                 * Encodes the specified PledgeMetadata message. Does not implicitly {@link com.auntpei.wonton.PledgeMetadata.verify|verify} messages.
                 * @param message PledgeMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeMetadata;

                /**
                 * Creates a PledgeMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeMetadata
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeMetadata;

                /**
                 * Creates a plain object from a PledgeMetadata message. Also converts values to other types if specified.
                 * @param message PledgeMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeConditionCombinerFunction. */
            interface IPledgeConditionCombinerFunction {
            }

            /** Represents a PledgeConditionCombinerFunction. */
            class PledgeConditionCombinerFunction implements IPledgeConditionCombinerFunction {

                /**
                 * Constructs a new PledgeConditionCombinerFunction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeConditionCombinerFunction);

                /**
                 * Encodes the specified PledgeConditionCombinerFunction message. Does not implicitly {@link com.auntpei.wonton.PledgeConditionCombinerFunction.verify|verify} messages.
                 * @param message PledgeConditionCombinerFunction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeConditionCombinerFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeConditionCombinerFunction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeConditionCombinerFunction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeConditionCombinerFunction;

                /**
                 * Creates a PledgeConditionCombinerFunction message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeConditionCombinerFunction
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeConditionCombinerFunction;

                /**
                 * Creates a plain object from a PledgeConditionCombinerFunction message. Also converts values to other types if specified.
                 * @param message PledgeConditionCombinerFunction
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeConditionCombinerFunction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeConditionCombinerFunction to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeConditionCombinerFunction
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace PledgeConditionCombinerFunction {

                /** Enum enum. */
                enum Enum {
                    UNKNOWN = 0,
                    AND = 1,
                    OR = 2
                }
            }

            /** Properties of a PledgeConditionComparatorFunction. */
            interface IPledgeConditionComparatorFunction {
            }

            /** Represents a PledgeConditionComparatorFunction. */
            class PledgeConditionComparatorFunction implements IPledgeConditionComparatorFunction {

                /**
                 * Constructs a new PledgeConditionComparatorFunction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeConditionComparatorFunction);

                /**
                 * Encodes the specified PledgeConditionComparatorFunction message. Does not implicitly {@link com.auntpei.wonton.PledgeConditionComparatorFunction.verify|verify} messages.
                 * @param message PledgeConditionComparatorFunction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeConditionComparatorFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeConditionComparatorFunction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeConditionComparatorFunction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeConditionComparatorFunction;

                /**
                 * Creates a PledgeConditionComparatorFunction message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeConditionComparatorFunction
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeConditionComparatorFunction;

                /**
                 * Creates a plain object from a PledgeConditionComparatorFunction message. Also converts values to other types if specified.
                 * @param message PledgeConditionComparatorFunction
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeConditionComparatorFunction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeConditionComparatorFunction to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeConditionComparatorFunction
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace PledgeConditionComparatorFunction {

                /** Enum enum. */
                enum Enum {
                    UNKNOWN = 0,
                    GREATER_EQUAL = 1
                }
            }

            /** Properties of a PledgeConditionPredicateCombiner. */
            interface IPledgeConditionPredicateCombiner {

                /** PledgeConditionPredicateCombiner combiner */
                combiner?: (com.auntpei.wonton.PledgeConditionCombinerFunction.Enum|null);

                /** PledgeConditionPredicateCombiner clauses */
                clauses?: (com.auntpei.wonton.PledgeConditionPredicate[]|null);
            }

            /** Represents a PledgeConditionPredicateCombiner. */
            class PledgeConditionPredicateCombiner implements IPledgeConditionPredicateCombiner {

                /**
                 * Constructs a new PledgeConditionPredicateCombiner.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeConditionPredicateCombiner);

                /** PledgeConditionPredicateCombiner combiner. */
                public combiner: com.auntpei.wonton.PledgeConditionCombinerFunction.Enum;

                /** PledgeConditionPredicateCombiner clauses. */
                public clauses: com.auntpei.wonton.PledgeConditionPredicate[];

                /**
                 * Encodes the specified PledgeConditionPredicateCombiner message. Does not implicitly {@link com.auntpei.wonton.PledgeConditionPredicateCombiner.verify|verify} messages.
                 * @param message PledgeConditionPredicateCombiner message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeConditionPredicateCombiner, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeConditionPredicateCombiner message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeConditionPredicateCombiner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeConditionPredicateCombiner;

                /**
                 * Creates a PledgeConditionPredicateCombiner message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeConditionPredicateCombiner
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeConditionPredicateCombiner;

                /**
                 * Creates a plain object from a PledgeConditionPredicateCombiner message. Also converts values to other types if specified.
                 * @param message PledgeConditionPredicateCombiner
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeConditionPredicateCombiner, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeConditionPredicateCombiner to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeConditionPredicateCombiner
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeConditionPredicateUniversityCount. */
            interface IPledgeConditionPredicateUniversityCount {

                /** PledgeConditionPredicateUniversityCount comparator */
                comparator?: (com.auntpei.wonton.PledgeConditionComparatorFunction.Enum|null);

                /** PledgeConditionPredicateUniversityCount universityCount */
                universityCount?: (Long|null);
            }

            /** Represents a PledgeConditionPredicateUniversityCount. */
            class PledgeConditionPredicateUniversityCount implements IPledgeConditionPredicateUniversityCount {

                /**
                 * Constructs a new PledgeConditionPredicateUniversityCount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeConditionPredicateUniversityCount);

                /** PledgeConditionPredicateUniversityCount comparator. */
                public comparator: com.auntpei.wonton.PledgeConditionComparatorFunction.Enum;

                /** PledgeConditionPredicateUniversityCount universityCount. */
                public universityCount: Long;

                /**
                 * Encodes the specified PledgeConditionPredicateUniversityCount message. Does not implicitly {@link com.auntpei.wonton.PledgeConditionPredicateUniversityCount.verify|verify} messages.
                 * @param message PledgeConditionPredicateUniversityCount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeConditionPredicateUniversityCount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeConditionPredicateUniversityCount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeConditionPredicateUniversityCount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeConditionPredicateUniversityCount;

                /**
                 * Creates a PledgeConditionPredicateUniversityCount message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeConditionPredicateUniversityCount
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeConditionPredicateUniversityCount;

                /**
                 * Creates a plain object from a PledgeConditionPredicateUniversityCount message. Also converts values to other types if specified.
                 * @param message PledgeConditionPredicateUniversityCount
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeConditionPredicateUniversityCount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeConditionPredicateUniversityCount to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeConditionPredicateUniversityCount
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeConditionPredicateCommitmentValue. */
            interface IPledgeConditionPredicateCommitmentValue {

                /** PledgeConditionPredicateCommitmentValue comparator */
                comparator?: (com.auntpei.wonton.PledgeConditionComparatorFunction.Enum|null);

                /** PledgeConditionPredicateCommitmentValue commitmentValueUsd */
                commitmentValueUsd?: (Long|null);
            }

            /** Represents a PledgeConditionPredicateCommitmentValue. */
            class PledgeConditionPredicateCommitmentValue implements IPledgeConditionPredicateCommitmentValue {

                /**
                 * Constructs a new PledgeConditionPredicateCommitmentValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeConditionPredicateCommitmentValue);

                /** PledgeConditionPredicateCommitmentValue comparator. */
                public comparator: com.auntpei.wonton.PledgeConditionComparatorFunction.Enum;

                /** PledgeConditionPredicateCommitmentValue commitmentValueUsd. */
                public commitmentValueUsd: Long;

                /**
                 * Encodes the specified PledgeConditionPredicateCommitmentValue message. Does not implicitly {@link com.auntpei.wonton.PledgeConditionPredicateCommitmentValue.verify|verify} messages.
                 * @param message PledgeConditionPredicateCommitmentValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeConditionPredicateCommitmentValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeConditionPredicateCommitmentValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeConditionPredicateCommitmentValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeConditionPredicateCommitmentValue;

                /**
                 * Creates a PledgeConditionPredicateCommitmentValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeConditionPredicateCommitmentValue
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeConditionPredicateCommitmentValue;

                /**
                 * Creates a plain object from a PledgeConditionPredicateCommitmentValue message. Also converts values to other types if specified.
                 * @param message PledgeConditionPredicateCommitmentValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeConditionPredicateCommitmentValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeConditionPredicateCommitmentValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeConditionPredicateCommitmentValue
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeConditionPredicate. */
            interface IPledgeConditionPredicate {

                /** PledgeConditionPredicate predicateCombiner */
                predicateCombiner?: (com.auntpei.wonton.PledgeConditionPredicateCombiner|null);

                /** PledgeConditionPredicate predicateUniversityCount */
                predicateUniversityCount?: (com.auntpei.wonton.PledgeConditionPredicateUniversityCount|null);

                /** PledgeConditionPredicate predicateCommitmentValue */
                predicateCommitmentValue?: (com.auntpei.wonton.PledgeConditionPredicateCommitmentValue|null);
            }

            /** Represents a PledgeConditionPredicate. */
            class PledgeConditionPredicate implements IPledgeConditionPredicate {

                /**
                 * Constructs a new PledgeConditionPredicate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeConditionPredicate);

                /** PledgeConditionPredicate predicateCombiner. */
                public predicateCombiner?: (com.auntpei.wonton.PledgeConditionPredicateCombiner|null);

                /** PledgeConditionPredicate predicateUniversityCount. */
                public predicateUniversityCount?: (com.auntpei.wonton.PledgeConditionPredicateUniversityCount|null);

                /** PledgeConditionPredicate predicateCommitmentValue. */
                public predicateCommitmentValue?: (com.auntpei.wonton.PledgeConditionPredicateCommitmentValue|null);

                /** PledgeConditionPredicate predicate. */
                public predicate?: ("predicateCombiner"|"predicateUniversityCount"|"predicateCommitmentValue");

                /**
                 * Encodes the specified PledgeConditionPredicate message. Does not implicitly {@link com.auntpei.wonton.PledgeConditionPredicate.verify|verify} messages.
                 * @param message PledgeConditionPredicate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeConditionPredicate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeConditionPredicate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeConditionPredicate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeConditionPredicate;

                /**
                 * Creates a PledgeConditionPredicate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeConditionPredicate
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeConditionPredicate;

                /**
                 * Creates a plain object from a PledgeConditionPredicate message. Also converts values to other types if specified.
                 * @param message PledgeConditionPredicate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeConditionPredicate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeConditionPredicate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeConditionPredicate
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeConditionWhereCombiner. */
            interface IPledgeConditionWhereCombiner {

                /** PledgeConditionWhereCombiner combiner */
                combiner?: (com.auntpei.wonton.PledgeConditionCombinerFunction.Enum|null);

                /** PledgeConditionWhereCombiner clauses */
                clauses?: (com.auntpei.wonton.PledgeConditionWhere[]|null);
            }

            /** Represents a PledgeConditionWhereCombiner. */
            class PledgeConditionWhereCombiner implements IPledgeConditionWhereCombiner {

                /**
                 * Constructs a new PledgeConditionWhereCombiner.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeConditionWhereCombiner);

                /** PledgeConditionWhereCombiner combiner. */
                public combiner: com.auntpei.wonton.PledgeConditionCombinerFunction.Enum;

                /** PledgeConditionWhereCombiner clauses. */
                public clauses: com.auntpei.wonton.PledgeConditionWhere[];

                /**
                 * Encodes the specified PledgeConditionWhereCombiner message. Does not implicitly {@link com.auntpei.wonton.PledgeConditionWhereCombiner.verify|verify} messages.
                 * @param message PledgeConditionWhereCombiner message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeConditionWhereCombiner, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeConditionWhereCombiner message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeConditionWhereCombiner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeConditionWhereCombiner;

                /**
                 * Creates a PledgeConditionWhereCombiner message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeConditionWhereCombiner
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeConditionWhereCombiner;

                /**
                 * Creates a plain object from a PledgeConditionWhereCombiner message. Also converts values to other types if specified.
                 * @param message PledgeConditionWhereCombiner
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeConditionWhereCombiner, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeConditionWhereCombiner to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeConditionWhereCombiner
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeConditionWhereUniversityName. */
            interface IPledgeConditionWhereUniversityName {

                /** PledgeConditionWhereUniversityName domainName */
                domainName?: (string|null);
            }

            /** Represents a PledgeConditionWhereUniversityName. */
            class PledgeConditionWhereUniversityName implements IPledgeConditionWhereUniversityName {

                /**
                 * Constructs a new PledgeConditionWhereUniversityName.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeConditionWhereUniversityName);

                /** PledgeConditionWhereUniversityName domainName. */
                public domainName: string;

                /**
                 * Encodes the specified PledgeConditionWhereUniversityName message. Does not implicitly {@link com.auntpei.wonton.PledgeConditionWhereUniversityName.verify|verify} messages.
                 * @param message PledgeConditionWhereUniversityName message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeConditionWhereUniversityName, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeConditionWhereUniversityName message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeConditionWhereUniversityName
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeConditionWhereUniversityName;

                /**
                 * Creates a PledgeConditionWhereUniversityName message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeConditionWhereUniversityName
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeConditionWhereUniversityName;

                /**
                 * Creates a plain object from a PledgeConditionWhereUniversityName message. Also converts values to other types if specified.
                 * @param message PledgeConditionWhereUniversityName
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeConditionWhereUniversityName, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeConditionWhereUniversityName to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeConditionWhereUniversityName
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeConditionWhereCountryName. */
            interface IPledgeConditionWhereCountryName {

                /** PledgeConditionWhereCountryName countryCode */
                countryCode?: (string|null);
            }

            /** Represents a PledgeConditionWhereCountryName. */
            class PledgeConditionWhereCountryName implements IPledgeConditionWhereCountryName {

                /**
                 * Constructs a new PledgeConditionWhereCountryName.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeConditionWhereCountryName);

                /** PledgeConditionWhereCountryName countryCode. */
                public countryCode: string;

                /**
                 * Encodes the specified PledgeConditionWhereCountryName message. Does not implicitly {@link com.auntpei.wonton.PledgeConditionWhereCountryName.verify|verify} messages.
                 * @param message PledgeConditionWhereCountryName message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeConditionWhereCountryName, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeConditionWhereCountryName message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeConditionWhereCountryName
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeConditionWhereCountryName;

                /**
                 * Creates a PledgeConditionWhereCountryName message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeConditionWhereCountryName
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeConditionWhereCountryName;

                /**
                 * Creates a plain object from a PledgeConditionWhereCountryName message. Also converts values to other types if specified.
                 * @param message PledgeConditionWhereCountryName
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeConditionWhereCountryName, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeConditionWhereCountryName to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeConditionWhereCountryName
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeConditionWhereCommitmentValueSlice. */
            interface IPledgeConditionWhereCommitmentValueSlice {
            }

            /** Represents a PledgeConditionWhereCommitmentValueSlice. */
            class PledgeConditionWhereCommitmentValueSlice implements IPledgeConditionWhereCommitmentValueSlice {

                /**
                 * Constructs a new PledgeConditionWhereCommitmentValueSlice.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeConditionWhereCommitmentValueSlice);

                /**
                 * Encodes the specified PledgeConditionWhereCommitmentValueSlice message. Does not implicitly {@link com.auntpei.wonton.PledgeConditionWhereCommitmentValueSlice.verify|verify} messages.
                 * @param message PledgeConditionWhereCommitmentValueSlice message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeConditionWhereCommitmentValueSlice, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeConditionWhereCommitmentValueSlice message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeConditionWhereCommitmentValueSlice
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeConditionWhereCommitmentValueSlice;

                /**
                 * Creates a PledgeConditionWhereCommitmentValueSlice message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeConditionWhereCommitmentValueSlice
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeConditionWhereCommitmentValueSlice;

                /**
                 * Creates a plain object from a PledgeConditionWhereCommitmentValueSlice message. Also converts values to other types if specified.
                 * @param message PledgeConditionWhereCommitmentValueSlice
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeConditionWhereCommitmentValueSlice, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeConditionWhereCommitmentValueSlice to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeConditionWhereCommitmentValueSlice
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace PledgeConditionWhereCommitmentValueSlice {

                /** Enum enum. */
                enum Enum {
                    UNKNOWN = 0,
                    COUNTRY = 1,
                    UNIVERSITY = 2,
                    PLEDGE = 3
                }
            }

            /** Properties of a PledgeConditionWhereCommitmentValue. */
            interface IPledgeConditionWhereCommitmentValue {

                /** PledgeConditionWhereCommitmentValue aggregationSlice */
                aggregationSlice?: (com.auntpei.wonton.PledgeConditionWhereCommitmentValueSlice.Enum|null);

                /** PledgeConditionWhereCommitmentValue comparator */
                comparator?: (com.auntpei.wonton.PledgeConditionComparatorFunction.Enum|null);

                /** PledgeConditionWhereCommitmentValue commitmentValueUsd */
                commitmentValueUsd?: (Long|null);
            }

            /** Represents a PledgeConditionWhereCommitmentValue. */
            class PledgeConditionWhereCommitmentValue implements IPledgeConditionWhereCommitmentValue {

                /**
                 * Constructs a new PledgeConditionWhereCommitmentValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeConditionWhereCommitmentValue);

                /** PledgeConditionWhereCommitmentValue aggregationSlice. */
                public aggregationSlice: com.auntpei.wonton.PledgeConditionWhereCommitmentValueSlice.Enum;

                /** PledgeConditionWhereCommitmentValue comparator. */
                public comparator: com.auntpei.wonton.PledgeConditionComparatorFunction.Enum;

                /** PledgeConditionWhereCommitmentValue commitmentValueUsd. */
                public commitmentValueUsd: Long;

                /**
                 * Encodes the specified PledgeConditionWhereCommitmentValue message. Does not implicitly {@link com.auntpei.wonton.PledgeConditionWhereCommitmentValue.verify|verify} messages.
                 * @param message PledgeConditionWhereCommitmentValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeConditionWhereCommitmentValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeConditionWhereCommitmentValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeConditionWhereCommitmentValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeConditionWhereCommitmentValue;

                /**
                 * Creates a PledgeConditionWhereCommitmentValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeConditionWhereCommitmentValue
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeConditionWhereCommitmentValue;

                /**
                 * Creates a plain object from a PledgeConditionWhereCommitmentValue message. Also converts values to other types if specified.
                 * @param message PledgeConditionWhereCommitmentValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeConditionWhereCommitmentValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeConditionWhereCommitmentValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeConditionWhereCommitmentValue
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeConditionWhere. */
            interface IPledgeConditionWhere {

                /** PledgeConditionWhere whereCombiner */
                whereCombiner?: (com.auntpei.wonton.PledgeConditionWhereCombiner|null);

                /** PledgeConditionWhere whereUniversityName */
                whereUniversityName?: (com.auntpei.wonton.PledgeConditionWhereUniversityName|null);

                /** PledgeConditionWhere whereCountryName */
                whereCountryName?: (com.auntpei.wonton.PledgeConditionWhereCountryName|null);

                /** PledgeConditionWhere whereCommitmentValue */
                whereCommitmentValue?: (com.auntpei.wonton.PledgeConditionWhereCommitmentValue|null);
            }

            /** Represents a PledgeConditionWhere. */
            class PledgeConditionWhere implements IPledgeConditionWhere {

                /**
                 * Constructs a new PledgeConditionWhere.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeConditionWhere);

                /** PledgeConditionWhere whereCombiner. */
                public whereCombiner?: (com.auntpei.wonton.PledgeConditionWhereCombiner|null);

                /** PledgeConditionWhere whereUniversityName. */
                public whereUniversityName?: (com.auntpei.wonton.PledgeConditionWhereUniversityName|null);

                /** PledgeConditionWhere whereCountryName. */
                public whereCountryName?: (com.auntpei.wonton.PledgeConditionWhereCountryName|null);

                /** PledgeConditionWhere whereCommitmentValue. */
                public whereCommitmentValue?: (com.auntpei.wonton.PledgeConditionWhereCommitmentValue|null);

                /** PledgeConditionWhere where. */
                public where?: ("whereCombiner"|"whereUniversityName"|"whereCountryName"|"whereCommitmentValue");

                /**
                 * Encodes the specified PledgeConditionWhere message. Does not implicitly {@link com.auntpei.wonton.PledgeConditionWhere.verify|verify} messages.
                 * @param message PledgeConditionWhere message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeConditionWhere, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeConditionWhere message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeConditionWhere
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeConditionWhere;

                /**
                 * Creates a PledgeConditionWhere message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeConditionWhere
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeConditionWhere;

                /**
                 * Creates a plain object from a PledgeConditionWhere message. Also converts values to other types if specified.
                 * @param message PledgeConditionWhere
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeConditionWhere, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeConditionWhere to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeConditionWhere
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeCondition. */
            interface IPledgeCondition {

                /** PledgeCondition predicate */
                predicate?: (com.auntpei.wonton.PledgeConditionPredicate|null);

                /** PledgeCondition where */
                where?: (com.auntpei.wonton.PledgeConditionWhere|null);
            }

            /** Represents a PledgeCondition. */
            class PledgeCondition implements IPledgeCondition {

                /**
                 * Constructs a new PledgeCondition.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeCondition);

                /** PledgeCondition predicate. */
                public predicate?: (com.auntpei.wonton.PledgeConditionPredicate|null);

                /** PledgeCondition where. */
                public where?: (com.auntpei.wonton.PledgeConditionWhere|null);

                /**
                 * Encodes the specified PledgeCondition message. Does not implicitly {@link com.auntpei.wonton.PledgeCondition.verify|verify} messages.
                 * @param message PledgeCondition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeCondition message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeCondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeCondition;

                /**
                 * Creates a PledgeCondition message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeCondition
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeCondition;

                /**
                 * Creates a plain object from a PledgeCondition message. Also converts values to other types if specified.
                 * @param message PledgeCondition
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeCondition to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeCondition
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeSwitchCondition. */
            interface IPledgeSwitchCondition {

                /** PledgeSwitchCondition formatUnstructured */
                formatUnstructured?: (string|null);

                /** PledgeSwitchCondition formatStructured */
                formatStructured?: (com.auntpei.wonton.PledgeCondition|null);
            }

            /** Represents a PledgeSwitchCondition. */
            class PledgeSwitchCondition implements IPledgeSwitchCondition {

                /**
                 * Constructs a new PledgeSwitchCondition.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeSwitchCondition);

                /** PledgeSwitchCondition formatUnstructured. */
                public formatUnstructured?: (string|null);

                /** PledgeSwitchCondition formatStructured. */
                public formatStructured?: (com.auntpei.wonton.PledgeCondition|null);

                /** PledgeSwitchCondition format. */
                public format?: ("formatUnstructured"|"formatStructured");

                /**
                 * Encodes the specified PledgeSwitchCondition message. Does not implicitly {@link com.auntpei.wonton.PledgeSwitchCondition.verify|verify} messages.
                 * @param message PledgeSwitchCondition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeSwitchCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeSwitchCondition message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeSwitchCondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeSwitchCondition;

                /**
                 * Creates a PledgeSwitchCondition message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeSwitchCondition
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeSwitchCondition;

                /**
                 * Creates a plain object from a PledgeSwitchCondition message. Also converts values to other types if specified.
                 * @param message PledgeSwitchCondition
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeSwitchCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeSwitchCondition to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeSwitchCondition
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeUpdateCreation. */
            interface IPledgeUpdateCreation {

                /** PledgeUpdateCreation universityDomainName */
                universityDomainName?: (string|null);

                /** PledgeUpdateCreation commitmentCondition */
                commitmentCondition?: (com.auntpei.wonton.PledgeSwitchCondition|null);

                /** PledgeUpdateCreation commitmentValueUsd */
                commitmentValueUsd?: (Long|null);
            }

            /** Represents a PledgeUpdateCreation. */
            class PledgeUpdateCreation implements IPledgeUpdateCreation {

                /**
                 * Constructs a new PledgeUpdateCreation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeUpdateCreation);

                /** PledgeUpdateCreation universityDomainName. */
                public universityDomainName: string;

                /** PledgeUpdateCreation commitmentCondition. */
                public commitmentCondition?: (com.auntpei.wonton.PledgeSwitchCondition|null);

                /** PledgeUpdateCreation commitmentValueUsd. */
                public commitmentValueUsd: Long;

                /**
                 * Encodes the specified PledgeUpdateCreation message. Does not implicitly {@link com.auntpei.wonton.PledgeUpdateCreation.verify|verify} messages.
                 * @param message PledgeUpdateCreation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeUpdateCreation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeUpdateCreation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeUpdateCreation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeUpdateCreation;

                /**
                 * Creates a PledgeUpdateCreation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeUpdateCreation
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeUpdateCreation;

                /**
                 * Creates a plain object from a PledgeUpdateCreation message. Also converts values to other types if specified.
                 * @param message PledgeUpdateCreation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeUpdateCreation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeUpdateCreation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeUpdateCreation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeUpdateDeletion. */
            interface IPledgeUpdateDeletion {
            }

            /** Represents a PledgeUpdateDeletion. */
            class PledgeUpdateDeletion implements IPledgeUpdateDeletion {

                /**
                 * Constructs a new PledgeUpdateDeletion.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeUpdateDeletion);

                /**
                 * Encodes the specified PledgeUpdateDeletion message. Does not implicitly {@link com.auntpei.wonton.PledgeUpdateDeletion.verify|verify} messages.
                 * @param message PledgeUpdateDeletion message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeUpdateDeletion, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeUpdateDeletion message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeUpdateDeletion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeUpdateDeletion;

                /**
                 * Creates a PledgeUpdateDeletion message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeUpdateDeletion
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeUpdateDeletion;

                /**
                 * Creates a plain object from a PledgeUpdateDeletion message. Also converts values to other types if specified.
                 * @param message PledgeUpdateDeletion
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeUpdateDeletion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeUpdateDeletion to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeUpdateDeletion
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeUpdateInvalidation. */
            interface IPledgeUpdateInvalidation {

                /** PledgeUpdateInvalidation reason */
                reason?: (string|null);
            }

            /** Represents a PledgeUpdateInvalidation. */
            class PledgeUpdateInvalidation implements IPledgeUpdateInvalidation {

                /**
                 * Constructs a new PledgeUpdateInvalidation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeUpdateInvalidation);

                /** PledgeUpdateInvalidation reason. */
                public reason: string;

                /**
                 * Encodes the specified PledgeUpdateInvalidation message. Does not implicitly {@link com.auntpei.wonton.PledgeUpdateInvalidation.verify|verify} messages.
                 * @param message PledgeUpdateInvalidation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeUpdateInvalidation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeUpdateInvalidation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeUpdateInvalidation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeUpdateInvalidation;

                /**
                 * Creates a PledgeUpdateInvalidation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeUpdateInvalidation
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeUpdateInvalidation;

                /**
                 * Creates a plain object from a PledgeUpdateInvalidation message. Also converts values to other types if specified.
                 * @param message PledgeUpdateInvalidation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeUpdateInvalidation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeUpdateInvalidation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeUpdateInvalidation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeUpdateConditionStructure. */
            interface IPledgeUpdateConditionStructure {

                /** PledgeUpdateConditionStructure commitmentConditionFormatStructured */
                commitmentConditionFormatStructured?: (com.auntpei.wonton.PledgeCondition|null);
            }

            /** Represents a PledgeUpdateConditionStructure. */
            class PledgeUpdateConditionStructure implements IPledgeUpdateConditionStructure {

                /**
                 * Constructs a new PledgeUpdateConditionStructure.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeUpdateConditionStructure);

                /** PledgeUpdateConditionStructure commitmentConditionFormatStructured. */
                public commitmentConditionFormatStructured?: (com.auntpei.wonton.PledgeCondition|null);

                /**
                 * Encodes the specified PledgeUpdateConditionStructure message. Does not implicitly {@link com.auntpei.wonton.PledgeUpdateConditionStructure.verify|verify} messages.
                 * @param message PledgeUpdateConditionStructure message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeUpdateConditionStructure, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeUpdateConditionStructure message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeUpdateConditionStructure
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeUpdateConditionStructure;

                /**
                 * Creates a PledgeUpdateConditionStructure message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeUpdateConditionStructure
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeUpdateConditionStructure;

                /**
                 * Creates a plain object from a PledgeUpdateConditionStructure message. Also converts values to other types if specified.
                 * @param message PledgeUpdateConditionStructure
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeUpdateConditionStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeUpdateConditionStructure to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeUpdateConditionStructure
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeUpdate. */
            interface IPledgeUpdate {

                /** PledgeUpdate metadata */
                metadata?: (com.auntpei.wonton.PledgeMetadata|null);

                /** PledgeUpdate updateCreation */
                updateCreation?: (com.auntpei.wonton.PledgeUpdateCreation|null);

                /** PledgeUpdate updateDeletion */
                updateDeletion?: (com.auntpei.wonton.PledgeUpdateDeletion|null);

                /** PledgeUpdate updateInvalidation */
                updateInvalidation?: (com.auntpei.wonton.PledgeUpdateInvalidation|null);

                /** PledgeUpdate updateConditionStructure */
                updateConditionStructure?: (com.auntpei.wonton.PledgeUpdateConditionStructure|null);
            }

            /** Represents a PledgeUpdate. */
            class PledgeUpdate implements IPledgeUpdate {

                /**
                 * Constructs a new PledgeUpdate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeUpdate);

                /** PledgeUpdate metadata. */
                public metadata?: (com.auntpei.wonton.PledgeMetadata|null);

                /** PledgeUpdate updateCreation. */
                public updateCreation?: (com.auntpei.wonton.PledgeUpdateCreation|null);

                /** PledgeUpdate updateDeletion. */
                public updateDeletion?: (com.auntpei.wonton.PledgeUpdateDeletion|null);

                /** PledgeUpdate updateInvalidation. */
                public updateInvalidation?: (com.auntpei.wonton.PledgeUpdateInvalidation|null);

                /** PledgeUpdate updateConditionStructure. */
                public updateConditionStructure?: (com.auntpei.wonton.PledgeUpdateConditionStructure|null);

                /** PledgeUpdate update. */
                public update?: ("updateCreation"|"updateDeletion"|"updateInvalidation"|"updateConditionStructure");

                /**
                 * Encodes the specified PledgeUpdate message. Does not implicitly {@link com.auntpei.wonton.PledgeUpdate.verify|verify} messages.
                 * @param message PledgeUpdate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeUpdate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeUpdate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeUpdate;

                /**
                 * Creates a PledgeUpdate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeUpdate
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeUpdate;

                /**
                 * Creates a plain object from a PledgeUpdate message. Also converts values to other types if specified.
                 * @param message PledgeUpdate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeUpdate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeUpdate
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeStageStatusProcessing. */
            interface IPledgeStageStatusProcessing {
            }

            /** Represents a PledgeStageStatusProcessing. */
            class PledgeStageStatusProcessing implements IPledgeStageStatusProcessing {

                /**
                 * Constructs a new PledgeStageStatusProcessing.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeStageStatusProcessing);

                /**
                 * Encodes the specified PledgeStageStatusProcessing message. Does not implicitly {@link com.auntpei.wonton.PledgeStageStatusProcessing.verify|verify} messages.
                 * @param message PledgeStageStatusProcessing message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeStageStatusProcessing, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeStageStatusProcessing message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeStageStatusProcessing
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeStageStatusProcessing;

                /**
                 * Creates a PledgeStageStatusProcessing message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeStageStatusProcessing
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeStageStatusProcessing;

                /**
                 * Creates a plain object from a PledgeStageStatusProcessing message. Also converts values to other types if specified.
                 * @param message PledgeStageStatusProcessing
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeStageStatusProcessing, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeStageStatusProcessing to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeStageStatusProcessing
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeStageStatusRegisteredConditionStatusSatisfied. */
            interface IPledgeStageStatusRegisteredConditionStatusSatisfied {
            }

            /** Represents a PledgeStageStatusRegisteredConditionStatusSatisfied. */
            class PledgeStageStatusRegisteredConditionStatusSatisfied implements IPledgeStageStatusRegisteredConditionStatusSatisfied {

                /**
                 * Constructs a new PledgeStageStatusRegisteredConditionStatusSatisfied.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeStageStatusRegisteredConditionStatusSatisfied);

                /**
                 * Encodes the specified PledgeStageStatusRegisteredConditionStatusSatisfied message. Does not implicitly {@link com.auntpei.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied.verify|verify} messages.
                 * @param message PledgeStageStatusRegisteredConditionStatusSatisfied message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeStageStatusRegisteredConditionStatusSatisfied message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeStageStatusRegisteredConditionStatusSatisfied
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied;

                /**
                 * Creates a PledgeStageStatusRegisteredConditionStatusSatisfied message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeStageStatusRegisteredConditionStatusSatisfied
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied;

                /**
                 * Creates a plain object from a PledgeStageStatusRegisteredConditionStatusSatisfied message. Also converts values to other types if specified.
                 * @param message PledgeStageStatusRegisteredConditionStatusSatisfied
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeStageStatusRegisteredConditionStatusSatisfied to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeStageStatusRegisteredConditionStatusSatisfied
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeStageStatusRegisteredConditionStatusUnsatisfied. */
            interface IPledgeStageStatusRegisteredConditionStatusUnsatisfied {

                /** PledgeStageStatusRegisteredConditionStatusUnsatisfied conditionProgressEstimate */
                conditionProgressEstimate?: (number|null);
            }

            /** Represents a PledgeStageStatusRegisteredConditionStatusUnsatisfied. */
            class PledgeStageStatusRegisteredConditionStatusUnsatisfied implements IPledgeStageStatusRegisteredConditionStatusUnsatisfied {

                /**
                 * Constructs a new PledgeStageStatusRegisteredConditionStatusUnsatisfied.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeStageStatusRegisteredConditionStatusUnsatisfied);

                /** PledgeStageStatusRegisteredConditionStatusUnsatisfied conditionProgressEstimate. */
                public conditionProgressEstimate: number;

                /**
                 * Encodes the specified PledgeStageStatusRegisteredConditionStatusUnsatisfied message. Does not implicitly {@link com.auntpei.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied.verify|verify} messages.
                 * @param message PledgeStageStatusRegisteredConditionStatusUnsatisfied message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeStageStatusRegisteredConditionStatusUnsatisfied message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeStageStatusRegisteredConditionStatusUnsatisfied
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied;

                /**
                 * Creates a PledgeStageStatusRegisteredConditionStatusUnsatisfied message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeStageStatusRegisteredConditionStatusUnsatisfied
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied;

                /**
                 * Creates a plain object from a PledgeStageStatusRegisteredConditionStatusUnsatisfied message. Also converts values to other types if specified.
                 * @param message PledgeStageStatusRegisteredConditionStatusUnsatisfied
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeStageStatusRegisteredConditionStatusUnsatisfied to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeStageStatusRegisteredConditionStatusUnsatisfied
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeStageStatusRegistered. */
            interface IPledgeStageStatusRegistered {

                /** PledgeStageStatusRegistered conditionStatusSatisfied */
                conditionStatusSatisfied?: (com.auntpei.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied|null);

                /** PledgeStageStatusRegistered conditionStatusUnsatisfied */
                conditionStatusUnsatisfied?: (com.auntpei.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied|null);
            }

            /** Represents a PledgeStageStatusRegistered. */
            class PledgeStageStatusRegistered implements IPledgeStageStatusRegistered {

                /**
                 * Constructs a new PledgeStageStatusRegistered.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeStageStatusRegistered);

                /** PledgeStageStatusRegistered conditionStatusSatisfied. */
                public conditionStatusSatisfied?: (com.auntpei.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied|null);

                /** PledgeStageStatusRegistered conditionStatusUnsatisfied. */
                public conditionStatusUnsatisfied?: (com.auntpei.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied|null);

                /** PledgeStageStatusRegistered conditionStatus. */
                public conditionStatus?: ("conditionStatusSatisfied"|"conditionStatusUnsatisfied");

                /**
                 * Encodes the specified PledgeStageStatusRegistered message. Does not implicitly {@link com.auntpei.wonton.PledgeStageStatusRegistered.verify|verify} messages.
                 * @param message PledgeStageStatusRegistered message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeStageStatusRegistered, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeStageStatusRegistered message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeStageStatusRegistered
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeStageStatusRegistered;

                /**
                 * Creates a PledgeStageStatusRegistered message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeStageStatusRegistered
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeStageStatusRegistered;

                /**
                 * Creates a plain object from a PledgeStageStatusRegistered message. Also converts values to other types if specified.
                 * @param message PledgeStageStatusRegistered
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeStageStatusRegistered, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeStageStatusRegistered to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeStageStatusRegistered
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeStageStatusInvalid. */
            interface IPledgeStageStatusInvalid {

                /** PledgeStageStatusInvalid reason */
                reason?: (string|null);
            }

            /** Represents a PledgeStageStatusInvalid. */
            class PledgeStageStatusInvalid implements IPledgeStageStatusInvalid {

                /**
                 * Constructs a new PledgeStageStatusInvalid.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeStageStatusInvalid);

                /** PledgeStageStatusInvalid reason. */
                public reason: string;

                /**
                 * Encodes the specified PledgeStageStatusInvalid message. Does not implicitly {@link com.auntpei.wonton.PledgeStageStatusInvalid.verify|verify} messages.
                 * @param message PledgeStageStatusInvalid message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeStageStatusInvalid, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeStageStatusInvalid message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeStageStatusInvalid
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeStageStatusInvalid;

                /**
                 * Creates a PledgeStageStatusInvalid message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeStageStatusInvalid
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeStageStatusInvalid;

                /**
                 * Creates a plain object from a PledgeStageStatusInvalid message. Also converts values to other types if specified.
                 * @param message PledgeStageStatusInvalid
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeStageStatusInvalid, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeStageStatusInvalid to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeStageStatusInvalid
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeStageStatus. */
            interface IPledgeStageStatus {

                /** PledgeStageStatus statusProcessing */
                statusProcessing?: (com.auntpei.wonton.PledgeStageStatusProcessing|null);

                /** PledgeStageStatus statusRegistered */
                statusRegistered?: (com.auntpei.wonton.PledgeStageStatusRegistered|null);

                /** PledgeStageStatus statusInvalid */
                statusInvalid?: (com.auntpei.wonton.PledgeStageStatusInvalid|null);
            }

            /** Represents a PledgeStageStatus. */
            class PledgeStageStatus implements IPledgeStageStatus {

                /**
                 * Constructs a new PledgeStageStatus.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeStageStatus);

                /** PledgeStageStatus statusProcessing. */
                public statusProcessing?: (com.auntpei.wonton.PledgeStageStatusProcessing|null);

                /** PledgeStageStatus statusRegistered. */
                public statusRegistered?: (com.auntpei.wonton.PledgeStageStatusRegistered|null);

                /** PledgeStageStatus statusInvalid. */
                public statusInvalid?: (com.auntpei.wonton.PledgeStageStatusInvalid|null);

                /** PledgeStageStatus status. */
                public status?: ("statusProcessing"|"statusRegistered"|"statusInvalid");

                /**
                 * Encodes the specified PledgeStageStatus message. Does not implicitly {@link com.auntpei.wonton.PledgeStageStatus.verify|verify} messages.
                 * @param message PledgeStageStatus message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeStageStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeStageStatus message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeStageStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeStageStatus;

                /**
                 * Creates a PledgeStageStatus message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeStageStatus
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeStageStatus;

                /**
                 * Creates a plain object from a PledgeStageStatus message. Also converts values to other types if specified.
                 * @param message PledgeStageStatus
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeStageStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeStageStatus to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeStageStatus
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeStageCondition. */
            interface IPledgeStageCondition {

                /** PledgeStageCondition formatUnstructured */
                formatUnstructured?: (string|null);

                /** PledgeStageCondition formatStructured */
                formatStructured?: (com.auntpei.wonton.PledgeCondition|null);
            }

            /** Represents a PledgeStageCondition. */
            class PledgeStageCondition implements IPledgeStageCondition {

                /**
                 * Constructs a new PledgeStageCondition.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeStageCondition);

                /** PledgeStageCondition formatUnstructured. */
                public formatUnstructured: string;

                /** PledgeStageCondition formatStructured. */
                public formatStructured?: (com.auntpei.wonton.PledgeCondition|null);

                /**
                 * Encodes the specified PledgeStageCondition message. Does not implicitly {@link com.auntpei.wonton.PledgeStageCondition.verify|verify} messages.
                 * @param message PledgeStageCondition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeStageCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeStageCondition message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeStageCondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeStageCondition;

                /**
                 * Creates a PledgeStageCondition message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeStageCondition
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeStageCondition;

                /**
                 * Creates a plain object from a PledgeStageCondition message. Also converts values to other types if specified.
                 * @param message PledgeStageCondition
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeStageCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeStageCondition to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeStageCondition
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PledgeStageInfo. */
            interface IPledgeStageInfo {

                /** PledgeStageInfo pledgeId */
                pledgeId?: (com.auntpei.wonton.PledgeId|null);

                /** PledgeStageInfo creationTimestampUsec */
                creationTimestampUsec?: (Long|null);

                /** PledgeStageInfo status */
                status?: (com.auntpei.wonton.PledgeStageStatus|null);

                /** PledgeStageInfo commitmentCondition */
                commitmentCondition?: (com.auntpei.wonton.PledgeStageCondition|null);

                /** PledgeStageInfo commitmentValueUsd */
                commitmentValueUsd?: (Long|null);
            }

            /** Represents a PledgeStageInfo. */
            class PledgeStageInfo implements IPledgeStageInfo {

                /**
                 * Constructs a new PledgeStageInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IPledgeStageInfo);

                /** PledgeStageInfo pledgeId. */
                public pledgeId?: (com.auntpei.wonton.PledgeId|null);

                /** PledgeStageInfo creationTimestampUsec. */
                public creationTimestampUsec: Long;

                /** PledgeStageInfo status. */
                public status?: (com.auntpei.wonton.PledgeStageStatus|null);

                /** PledgeStageInfo commitmentCondition. */
                public commitmentCondition?: (com.auntpei.wonton.PledgeStageCondition|null);

                /** PledgeStageInfo commitmentValueUsd. */
                public commitmentValueUsd: Long;

                /**
                 * Encodes the specified PledgeStageInfo message. Does not implicitly {@link com.auntpei.wonton.PledgeStageInfo.verify|verify} messages.
                 * @param message PledgeStageInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.PledgeStageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PledgeStageInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PledgeStageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.PledgeStageInfo;

                /**
                 * Creates a PledgeStageInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PledgeStageInfo
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.PledgeStageInfo;

                /**
                 * Creates a plain object from a PledgeStageInfo message. Also converts values to other types if specified.
                 * @param message PledgeStageInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.PledgeStageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PledgeStageInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PledgeStageInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UniversityStageInfo. */
            interface IUniversityStageInfo {

                /** UniversityStageInfo domainName */
                domainName?: (string|null);

                /** UniversityStageInfo pledgeInfos */
                pledgeInfos?: (com.auntpei.wonton.PledgeStageInfo[]|null);
            }

            /** Represents an UniversityStageInfo. */
            class UniversityStageInfo implements IUniversityStageInfo {

                /**
                 * Constructs a new UniversityStageInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IUniversityStageInfo);

                /** UniversityStageInfo domainName. */
                public domainName: string;

                /** UniversityStageInfo pledgeInfos. */
                public pledgeInfos: com.auntpei.wonton.PledgeStageInfo[];

                /**
                 * Encodes the specified UniversityStageInfo message. Does not implicitly {@link com.auntpei.wonton.UniversityStageInfo.verify|verify} messages.
                 * @param message UniversityStageInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.UniversityStageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UniversityStageInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UniversityStageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.UniversityStageInfo;

                /**
                 * Creates an UniversityStageInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UniversityStageInfo
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.UniversityStageInfo;

                /**
                 * Creates a plain object from an UniversityStageInfo message. Also converts values to other types if specified.
                 * @param message UniversityStageInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.UniversityStageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UniversityStageInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UniversityStageInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StageInfo. */
            interface IStageInfo {

                /** StageInfo universityInfos */
                universityInfos?: (com.auntpei.wonton.UniversityStageInfo[]|null);
            }

            /** Represents a StageInfo. */
            class StageInfo implements IStageInfo {

                /**
                 * Constructs a new StageInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IStageInfo);

                /** StageInfo universityInfos. */
                public universityInfos: com.auntpei.wonton.UniversityStageInfo[];

                /**
                 * Encodes the specified StageInfo message. Does not implicitly {@link com.auntpei.wonton.StageInfo.verify|verify} messages.
                 * @param message StageInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.StageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StageInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.StageInfo;

                /**
                 * Creates a StageInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StageInfo
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.StageInfo;

                /**
                 * Creates a plain object from a StageInfo message. Also converts values to other types if specified.
                 * @param message StageInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.StageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StageInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StageInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a UserType. */
            interface IUserType {
            }

            /** Represents a UserType. */
            class UserType implements IUserType {

                /**
                 * Constructs a new UserType.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IUserType);

                /**
                 * Encodes the specified UserType message. Does not implicitly {@link com.auntpei.wonton.UserType.verify|verify} messages.
                 * @param message UserType message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.UserType, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UserType message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UserType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.UserType;

                /**
                 * Creates a UserType message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UserType
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.UserType;

                /**
                 * Creates a plain object from a UserType message. Also converts values to other types if specified.
                 * @param message UserType
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.UserType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UserType to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UserType
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace UserType {

                /** Enum enum. */
                enum Enum {
                    UNKNOWN = 0,
                    SYSTEM = 1,
                    UNIVERSITY = 2
                }
            }

            /** Properties of a UserPassword. */
            interface IUserPassword {

                /** UserPassword activationTimestampUsec */
                activationTimestampUsec?: (Long|null);

                /** UserPassword deactivationTimestampUsec */
                deactivationTimestampUsec?: (Long|null);

                /** UserPassword password */
                password?: (string|null);
            }

            /** Represents a UserPassword. */
            class UserPassword implements IUserPassword {

                /**
                 * Constructs a new UserPassword.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IUserPassword);

                /** UserPassword activationTimestampUsec. */
                public activationTimestampUsec: Long;

                /** UserPassword deactivationTimestampUsec. */
                public deactivationTimestampUsec: Long;

                /** UserPassword password. */
                public password: string;

                /**
                 * Encodes the specified UserPassword message. Does not implicitly {@link com.auntpei.wonton.UserPassword.verify|verify} messages.
                 * @param message UserPassword message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.UserPassword, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UserPassword message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UserPassword
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.UserPassword;

                /**
                 * Creates a UserPassword message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UserPassword
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.UserPassword;

                /**
                 * Creates a plain object from a UserPassword message. Also converts values to other types if specified.
                 * @param message UserPassword
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.UserPassword, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UserPassword to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UserPassword
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a UserRepresentative. */
            interface IUserRepresentative {

                /** UserRepresentative email */
                email?: (string|null);

                /** UserRepresentative verification */
                verification?: (string|null);
            }

            /** Represents a UserRepresentative. */
            class UserRepresentative implements IUserRepresentative {

                /**
                 * Constructs a new UserRepresentative.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IUserRepresentative);

                /** UserRepresentative email. */
                public email: string;

                /** UserRepresentative verification. */
                public verification: string;

                /**
                 * Encodes the specified UserRepresentative message. Does not implicitly {@link com.auntpei.wonton.UserRepresentative.verify|verify} messages.
                 * @param message UserRepresentative message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.UserRepresentative, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UserRepresentative message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UserRepresentative
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.UserRepresentative;

                /**
                 * Creates a UserRepresentative message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UserRepresentative
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.UserRepresentative;

                /**
                 * Creates a plain object from a UserRepresentative message. Also converts values to other types if specified.
                 * @param message UserRepresentative
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.UserRepresentative, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UserRepresentative to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UserRepresentative
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a UserSecretInfo. */
            interface IUserSecretInfo {

                /** UserSecretInfo type */
                type?: (com.auntpei.wonton.UserType.Enum|null);

                /** UserSecretInfo username */
                username?: (string|null);

                /** UserSecretInfo passwords */
                passwords?: (com.auntpei.wonton.UserPassword[]|null);

                /** UserSecretInfo representatives */
                representatives?: (com.auntpei.wonton.UserRepresentative[]|null);
            }

            /** Represents a UserSecretInfo. */
            class UserSecretInfo implements IUserSecretInfo {

                /**
                 * Constructs a new UserSecretInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.IUserSecretInfo);

                /** UserSecretInfo type. */
                public type: com.auntpei.wonton.UserType.Enum;

                /** UserSecretInfo username. */
                public username: string;

                /** UserSecretInfo passwords. */
                public passwords: com.auntpei.wonton.UserPassword[];

                /** UserSecretInfo representatives. */
                public representatives: com.auntpei.wonton.UserRepresentative[];

                /**
                 * Encodes the specified UserSecretInfo message. Does not implicitly {@link com.auntpei.wonton.UserSecretInfo.verify|verify} messages.
                 * @param message UserSecretInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.UserSecretInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UserSecretInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UserSecretInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.UserSecretInfo;

                /**
                 * Creates a UserSecretInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UserSecretInfo
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.UserSecretInfo;

                /**
                 * Creates a plain object from a UserSecretInfo message. Also converts values to other types if specified.
                 * @param message UserSecretInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.UserSecretInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UserSecretInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UserSecretInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SecretInfo. */
            interface ISecretInfo {

                /** SecretInfo userInfos */
                userInfos?: (com.auntpei.wonton.UserSecretInfo[]|null);
            }

            /** Represents a SecretInfo. */
            class SecretInfo implements ISecretInfo {

                /**
                 * Constructs a new SecretInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.auntpei.wonton.ISecretInfo);

                /** SecretInfo userInfos. */
                public userInfos: com.auntpei.wonton.UserSecretInfo[];

                /**
                 * Encodes the specified SecretInfo message. Does not implicitly {@link com.auntpei.wonton.SecretInfo.verify|verify} messages.
                 * @param message SecretInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.auntpei.wonton.SecretInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SecretInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SecretInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.auntpei.wonton.SecretInfo;

                /**
                 * Creates a SecretInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SecretInfo
                 */
                public static fromObject(object: { [k: string]: any }): com.auntpei.wonton.SecretInfo;

                /**
                 * Creates a plain object from a SecretInfo message. Also converts values to other types if specified.
                 * @param message SecretInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.auntpei.wonton.SecretInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SecretInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SecretInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}
