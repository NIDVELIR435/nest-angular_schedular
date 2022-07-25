import {allowsStatusCodeNumber} from "@nest-angular/backend/src/app/common/constants/allowsStatusCodeNumber.constants";

export type ApiResponsesType = {
  [Key in typeof allowsStatusCodeNumber]: {
    description?: string;
    type?: { new (): unknown };
    isArray?: boolean;
  };
};
