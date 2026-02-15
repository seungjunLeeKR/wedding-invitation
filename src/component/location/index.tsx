import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
		  <div className="detail small">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용 시
            <br />
					선릉역 (
						<span style={{ color: "#27ae60" }}>2호선</span>,
						{' '}
						<span style={{ color: "#f1c40f" }}>수인분당선</span>
					) 4번 출구
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - 간선: 146, 333, 341, 360, 740
            <br />
            - 광역: 1100, 1700, 2000, 2000-1, 7007, 8001, 9303, 9414
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">주차 안내</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 내비 등 이용
            <br />
            <b>"한신인터밸리24 주차장"</b> 검색(2시간 무료)
          </div>
        </div>
      </LazyDiv>
    </>
  )
}