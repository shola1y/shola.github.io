import image from "next/image";
import react from "react";
import { ImageWrap } from './ProfpicStyles';
import styled, { css } from 'styled-components';



const Profpic=({alt,src,width,height})=>{
    return(
        <ImageWrap
            alt={alt}
            src={'/images/profpic1.png'}
            width={300}
            height={300}
            quality={70}
            />
        

    );
};


export default Profpic;