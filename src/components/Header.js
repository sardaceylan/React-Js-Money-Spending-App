import React from "react";

const Header = ({ total, money, resetBasket }) => {
  return (
    <div className="header">
      <div>
        {(total > 0 && (
          <>Hesabınızda ${money - total} kadar paranız kaldı!</>
        )) || <>Hesabınızda ${money} kadar paranız var!</>}
      </div>
      <button className="reset" onClick={resetBasket}>
        Sepeti Sıfırla
      </button>
    </div>
  );
};
export default Header;
