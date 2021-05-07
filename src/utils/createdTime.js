export const calculateCreatedTimeStamp = (createdTimeStamp) => {
  const today = new Date();
  const diffMS = today.getTime() - createdTimeStamp.getTime();
  const diffMunitues = parseInt(diffMS / (1000 * 60));
  const diffHours = parseInt(diffMunitues / 60);

  let stringifiedCreatedTime;
  if (diffHours < 1) {
    stringifiedCreatedTime = `${diffMunitues}분 전`;
  } else if (diffHours < 24) {
    stringifiedCreatedTime = `${diffHours}시간 전`;
  } else {
    stringifiedCreatedTime = `${createdTimeStamp.getFullYear()}년 ${
      createdTimeStamp.getMonth() + 1
    }월 ${createdTimeStamp.getDate()}일`;
  }
  return stringifiedCreatedTime;
};
