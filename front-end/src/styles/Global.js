import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
      
    *{
        margin: 0;
        padding: 0;
        /* outline:0; */
        box-sizing:border-box;
        
    }
    #root{
        /* margin:0 auto; */
        overflow-x: hidden;
        
        
    }
    body {
        -webkit-font-smoothing: antialiased;
        font-family: Barlow, "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
        font-size: 62.5%;
        background-image: url(${(props) => props.image})
    }
    body::-webkit-scrollbar {
        width: .5rem;
    }
    body::-webkit-scrollbar-track {
        background: transparent;
    }
    body::-webkit-scrollbar-thumb {
        background-color: #00000090;
        border-radius: .5rem;
    }
    .link {
      text-decoration: none;
      color: inherit;
    }
    
`;
