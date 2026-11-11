import { ColorPrimaryWrapper } from "../../components/ColorPrimaryWrapper";
import { InformationOutline } from "../../components/InformationOutline";
import "../../../style/Teslayoutfilm.css";

export const Frame = () => {
  return (
    <div className="frame" data-model-id="545:490">
      <img
        className="rectangle"
        alt="Rectangle"
        src="https://c.animaapp.com/FOeDvUsK/img/rectangle-9.png"
      />
      <div className="div">
        <div className="div-2">
          <div className="text-wrapper-2">Duty After School</div>
          <p className="p">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
        </div>
        <div className="div-3">
          <div className="div-4">
            <ColorPrimaryWrapper
              buttonContent="Mulai"
              className="design-component-instance-node"
              color="primary"
              variant="contained"
            />
            <div className="button-wrapper">
              <div className="content-wrapper">
                <div className="content">
                  <InformationOutline
                    className="information-outline-instance"
                    informationOutline="https://c.animaapp.com/FOeDvUsK/img/information-outline-1.svg"
                  />
                  <div className="button-2">Selengkapnya</div>
                </div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-3">18+</div>
            </div>
          </div>
          <img
            className="img"
            alt="Frame"
            src="https://c.animaapp.com/FOeDvUsK/img/frame-65.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Frame;
