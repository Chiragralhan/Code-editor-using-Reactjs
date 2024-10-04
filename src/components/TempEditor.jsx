import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Box, styled } from '@mui/material';
import { Controlled as ControlledEditor } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/theme/material.css';
import { useState } from 'react';
import '../App.css';
//we store box into container,heading etc to use styled thing to it
const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    flex-direction: colunmn;
    padding: 0 8px 8px;
    
`
const Heading = styled(Box)`
    display: flex;
    padding: 9px 12px;
    background: #1d1e22;
    
`
const Header = styled(Box)`
    display: flex;
    background: #060606;
    color: #AAAEBC;
    justify-content: space-between;
    font-weight: 600;
`


const TempEditor = ({heading,icon,color,value, onChange})=>{ // <-Props
    
    const [open, setOpen] = useState(true);

    const handleChange = (editor, data , value) =>{
        onChange(value);
    }
    
    return(
        //box in two parts

        <Container style={open ? null : { flexGrow: 0}}>
            <Header>
                <Heading>
                    <Box
                    component="span"//using span to style only '/' without affecting other text
                    style={{
                        display: 'flex',
                        height : 20,
                        width : 20,
                        background: color, //using prop color
                        placeContent: 'center',//to take '/' in middle
                        borderRadius: 5,
                        marginRight: 5,
                        paddingBottom: 2,
                        color: '#060606',
                    }}//icon and heading are props , when we started building we used HTML and'/'(hard coding) which appeared everywhere then we changed using prop
                    >{icon}</Box>

                    {heading}
                    
                </Heading>
                <CloseFullscreenIcon
                    onClick = {() =>  setOpen(prevState => !prevState)}
                    fontSize='small'/>
            </Header>
            <ControlledEditor className=//we handle its css in App.css
            'controlled-editor'
            value={value}
            onBeforeChange={handleChange}
            options={{
                theme: 'material',
                lineNumbers: true
            }
            }/>
            
        </Container>
    )
}
export default TempEditor