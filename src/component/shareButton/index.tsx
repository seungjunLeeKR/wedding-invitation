import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import ktalkIcon from "../../icons/ktalk-icon.png"
import { LazyDiv } from "../lazyDiv"
import { useKakao } from "../store"

const baseUrl = import.meta.env.BASE_URL

export const ShareButton = () => {
  const kakao = useKakao()
  return (
    <LazyDiv className="footer share-button">
      <button
        className="ktalk-share"
        onClick={() => {
          if (!kakao) {
            console.log("Kakao SDK not loaded")
            return
          }

          const shareUrl = window.location.protocol + "//" + window.location.host + baseUrl
          
          kakao.Share.sendScrap({
            requestUrl: shareUrl,
            templateId: 112223,
            templateArgs: {
              title: `${GROOM_FULLNAME} ❤️ ${BRIDE_FULLNAME}의 결혼식`,
              description: WEDDING_DATE.format(WEDDING_DATE_FORMAT) + " / " + LOCATION,
            },
            successCallback: (response) => {
              console.log("공유 성공", response)
            },
            failCallback: (error) => {
              console.log("공유 실패", error)
              // 실패 시 URL 복사
              navigator.clipboard.writeText(shareUrl)
              alert("공유 링크가 복사되었습니다.\n" + shareUrl)
            },
          })
        }}
      >
        <img src={ktalkIcon} alt="ktalk-icon" /> 카카오톡으로 공유하기
      </button>
    </LazyDiv>
  )
}
