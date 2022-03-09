import React from "react";
import styled from 'styled-components';

function OpenSiteDate() {
    let UserGetDate = new Date();
    const DateWrapper = styled.div`
      color: black;
      font-weight: bold;
      font-size: 25px;
    `;
    return(
        <DateWrapper>{UserGetDate.toLocaleTimeString()}</DateWrapper>
    )
}

export default OpenSiteDate;