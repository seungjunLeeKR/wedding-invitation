import { BRIDE_INFO, GROOM_INFO } from "../../const"
import { STATIC_ONLY } from "../../env"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import { useModal } from "../modal"
import { AttendanceInfo } from "./attendance"

export const Information1 = () => {
  const { openModal, closeModal } = useModal()

  const openAccountsModal = (title: string, list: typeof GROOM_INFO) => {
    openModal({
      className: "donation-modal",
      closeOnClickBackground: true,
      header: <div className="title">{title}</div>,
      content: (
        <>
          {list.filter(({ account }) => !!account).map(({ relation, name, account }) => (
            <div className="account-info" key={relation}>
              <div>
                <div className="name">
                  <span className="relation">{relation}</span> {name}
                </div>
                <div>{account}</div>
              </div>
              <Button
                className="copy-button"
                onClick={async () => {
                  if (account) {
                    try {
                      navigator.clipboard.writeText(account)
                      alert(account + "\n복사되었습니다.")
                    } catch {
                      alert("복사에 실패했습니다.")
                    }
                  }
                }}
              >
                복사하기
              </Button>
            </div>
          ))}
        </>
      ),
      footer: (
        <Button buttonStyle="style2" className="bg-light-grey-color text-dark-color" onClick={closeModal}>
          닫기
        </Button>
      ),
    })
  }

  return (
    <>
      <h2 className="english">Information</h2>

      <div className="info-card">
        <div className="label">마음 전하기</div>


        <div className="break" />

        <Button style={{ width: "100%" }} onClick={() => openAccountsModal("신랑측 계좌번호", GROOM_INFO)}>
          신랑측 계좌번호 보기
        </Button>
        <div className="break" />
        <Button style={{ width: "100%" }} onClick={() => openAccountsModal("신부측 계좌번호", BRIDE_INFO)}>
          신부측 계좌번호 보기
        </Button>
      </div>
    </>
  )
}

/* Information2 merged into Information1; no separate component needed */

export const Information = () => {
  if (STATIC_ONLY) {
    return (
      <LazyDiv className="card information">
        <Information1 />
      </LazyDiv>
    )
  }

  return (
    <LazyDiv className="card information">
      <Information1 />
      <AttendanceInfo />
    </LazyDiv>
  )
}
