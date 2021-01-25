import React from 'react'
import styled from 'styled-components'

window.onscroll = function () { myFunction() }


function myFunction() {
    let header = document.getElementById("myHeader")
    let sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky")
    }
}

const Header = () => {
    return (
        <StickyHeader className="header" id="myHeader">
            <h1>Pastiche App</h1>
        </StickyHeader>
    )
}



export default Header

const StickyHeader = styled.div`
    background: pink;
    :content {
        padding: 16px;
    };
    :sticky {
        position: fixed;
        top: 0;
        width: 100%;
    }
`;
