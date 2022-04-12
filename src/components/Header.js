import React from "react";

const Header = ({ total, money }) => {
  return (
    <>
      <div>
        {(total > 0 && (
          <>Hesabınızda ${money - total} kadar paranız kaldı!</>
        )) || <>Hesabınızda ${money} kadar paranız var!</>}
      </div>
    </>
  );
};
export default Header;
