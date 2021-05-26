import * as S from "./style";
import { calculateCreatedTimestamp } from "utils/createdTime";

const CreatedTime = ({ createdTime }) => {
  const stringifiedCreatedTime = calculateCreatedTimestamp(createdTime);

  return <S.CreatedTime>{stringifiedCreatedTime}</S.CreatedTime>;
};

export default CreatedTime;
