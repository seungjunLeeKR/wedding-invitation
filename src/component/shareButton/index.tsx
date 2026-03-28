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

          // 현재 페이지 주소 (공유할 URL)
          const shareUrl = window.location.protocol + "//" + window.location.host + baseUrl
          
          // 이 로그를 찍어서 나오는 문자열을 그대로 복사해 보세요.
          console.log("전송되는 URL:", shareUrl); 
          console.log("Base URL 설정값:", baseUrl);

          try {
            if (kakao.Share && kakao.Share.sendScrap) {
                kakao.Share.sendScrap({
                  requestUrl: shareUrl,
                  templateId: 131174, // 수정하신 템플릿 ID를 반드시 넣어줘야 합니다.
                });
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