import { Box, styled } from '@mui/material'; //used to style the box
import { useContext } from "react";
import { DataContext } from '../context/DataProvider';
import TempEditor from "./TempEditor";
const Container = styled(Box)`
    display: flex;
    background: #060606;
    height: 55vh;
`
const Code = () =>{

    const {html, setHtml , css, setCss , js, setJs} =useContext(DataContext);
    return(
        //fragments<> for wrapping multiple elements
        //3 for html css n js
        //wrapped in box(then stored in Container to apply css) to apply flex so that they appear side by side 
        <Container>
            <TempEditor
                heading = 'HTML'
                icon = '/'
                color='#FF3C41'
                value={html}
                onChange= {setHtml}/>
            <TempEditor
                heading = 'CSS'
                icon = '*'
                color='#0EBEFF'
                value={css}
                onChange= {setCss}/>
            <TempEditor
                heading = 'JAVASCRIPT'
                icon = '()'
                color='#FCD000'
                value={js}
                onChange= {setJs}/>
        </Container>
        
    )


}

export default Code;