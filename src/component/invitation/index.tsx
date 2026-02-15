import {
  BRIDE_FULLNAME,
  BRIDE_FATHER,
  BRIDE_MOTHER,
  GROOM_FULLNAME,
  GROOM_FATHER,
  GROOM_MOTHER,
  GROOM_TITLE,
  BRIDE_TITLE,
} from "../../const"
import { LazyDiv } from "../lazyDiv"

export const Invitation = () => {
  return (
    <LazyDiv className="card invitation">
      <h2 className="english">Invitation</h2>

      <div className="break" />

      <div className="content">2023년 크리스마스, 작은 인연으로 시작된 저희는</div>
      <div className="content">두 번의 사계절을 지나 찬란한 5월,</div>
      <div className="content">사랑의 결실을 맺게 되었습니다.</div>
      <div className="break" />
      <div className="content">서로에 대한 믿음과 사랑을 바탕으로</div>
      <div className="content">이제는 부부로서 같은 길을 함께 걸어가려 합니다.</div>
      <div className="break" />
      <div className="content">저희의 새로운 출발을 약속하는 이 자리에</div>
      <div className="content">귀한 걸음 하시어 따뜻한 축복으로</div>
      <div className="content">함께해 주시면 감사하겠습니다.</div>

      <div className="break" />

      <div className="name">
        {GROOM_FATHER} · {GROOM_MOTHER}
        <span className="relation">
          의 <span className="relation-name">{GROOM_TITLE}</span>
        </span>{" "}
        {GROOM_FULLNAME}
      </div>
      <div className="name">
        {BRIDE_FATHER} · {BRIDE_MOTHER}
        <span className="relation">
          의 <span className="relation-name">{BRIDE_TITLE}</span>
        </span>{" "}
        {BRIDE_FULLNAME}
      </div>
    </LazyDiv>
  )
}