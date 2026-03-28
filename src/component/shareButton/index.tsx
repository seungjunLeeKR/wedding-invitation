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
            alert("카카오톡 SDK를 로드할 수 없습니다.")
            return
          }

          const shareUrl = window.location.protocol + "//" + window.location.host + baseUrl
          
          try {
            if (kakao.Share && kakao.Share.sendScrap) {
              kakao.Share.sendScrap({
                requestUrl: shareUrl,
              })
            } else {
              // sendScrap 미지원 시 링크 복사
              navigator.clipboard.writeText(shareUrl)
              alert("공유 링크가 복사되었습니다.\n" + shareUrl)
            }
          } catch (error) {
            console.error("공유 중 오류:", error)
            navigator.clipboard.writeText(shareUrl)
            alert("공유 링크가 복사되었습니다.\n" + shareUrl)
          }
        }}
      >
        <img src={ktalkIcon} alt="ktalk-icon" /> 카카오톡으로 공유하기
      </button>
    </LazyDiv>
  )
}
