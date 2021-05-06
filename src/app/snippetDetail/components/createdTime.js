import * as S from "./style"

const CreatedTime = ({createdTime}) => {
    const today = new Date();
    const diffMS = today.getTime() - createdTime.getTime();
    const diffMunitues = parseInt(diffMS/(1000*60));
    const diffHours = parseInt(diffMunitues/60);

    let stringifiedCreatedTime;
    if(diffHours<1) {
        stringifiedCreatedTime = `${diffMunitues}분 전`;
    }
    else if(diffHours<24) {
        stringifiedCreatedTime = `${diffHours}시간 전`;
    }
    else {
        stringifiedCreatedTime = `${createdTime.getFullYear()} / ${createdTime.getMonth()+1} / ${createdTime.getDate()}`;
    }

    return <S.CreatedTime>{stringifiedCreatedTime}</S.CreatedTime>;
};

export default CreatedTime;