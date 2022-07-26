import { isNil } from 'lodash';
import {
  statusCodeToDefaultDescription
} from "@nest-angular/backend/src/app/common/constants/statusCodeToDefaultDescription.constant";

export const getResponse = (
  status: string,
  description?: string,
  type?: { new (): unknown },
  isArray = false
) =>
  !isNil(type)
    ? {
        status: Number(status),
        type,
        isArray,
        description: !isNil(description)
          ? description
          : statusCodeToDefaultDescription[status]!,
      }
    : {
        status: Number(status),
        isArray,
        description: !isNil(description)
          ? description
          : statusCodeToDefaultDescription[status]!,
      };
