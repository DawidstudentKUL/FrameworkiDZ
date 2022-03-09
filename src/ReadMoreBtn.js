import React from "react";
import styled from 'styled-components'

function ReadMoreBtn() {
    const ReadMoreBtn = styled.button`
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #6a0202;
      border-radius: 10%;
      background-color: transparent;
      padding: 20px 40px;
      color: #6a0202;
      margin: 0 auto;
      cursor: pointer;
      transition: all .5s ease-in ;
      &:hover {
        background: #6a0202;
        color: white;
      }
    `;
    return(
            <ReadMoreBtn>Czytaj więcej</ReadMoreBtn>
    )
}
export default ReadMoreBtn;