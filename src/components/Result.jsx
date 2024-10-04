import { Box, styled } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    height: 41vh;
`;

const Result = () => {
    const [src, setSrc] = useState('');
    const { html, css, js } = useContext(DataContext);

    // Wrap the JavaScript code in a try-catch block to avoid breaking execution
    const safeJs = `
        try {
            ${js}
        } catch (e) {
            console.error('Error in injected script:', e);
        }
    `;

    // Proper HTML structure with fallback for empty values
    const srcCode = `
        <html>
            <head>
                <style>${css || 'body { background-color: white; }'}</style>
            </head>
            <body>
                ${html }
                <script>${safeJs}</script>
            </body>
        </html>
    `;

    useEffect(() => {
        // Log the HTML, CSS, and JS to verify values
        console.log("HTML:", html);
        console.log("CSS:", css);
        console.log("JS:", js);

        const timeout = setTimeout(() => {
            setSrc(srcCode);
            console.log("Generated srcDoc:", srcCode);  // Log the generated HTML for debugging
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <Container style={html || css || js ? null : { background: '#444857' }}>
            <iframe
                srcDoc={src}
                title="output"
                sandbox="allow-scripts allow-same-origin"
                frameBorder="0"
                width="100%"
                height="100%"
            />
        </Container>
    );
};

export default Result;
