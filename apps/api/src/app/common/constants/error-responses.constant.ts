import { StatusCodes } from 'http-status-codes';
import {ErrorExceptionDto} from "@nest-angular/backend/src/app/common/dtos/error-exception.dto";
import {
  statusCodeToDefaultDescription
} from "@nest-angular/backend/src/app/common/constants/statusCodeToDefaultDescription.constant";

export const errorsResponses = {
  [StatusCodes.CONFLICT]: {
    type: ErrorExceptionDto,
    isArray: false,
    description: statusCodeToDefaultDescription[StatusCodes.CONFLICT],
  },
  [StatusCodes.NOT_FOUND]: {
    type: ErrorExceptionDto,
    isArray: false,
    description: statusCodeToDefaultDescription[StatusCodes.NOT_FOUND],
  },
} as const;
