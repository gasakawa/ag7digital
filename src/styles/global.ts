import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    color: #000;
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font: 16px 'Poppins', sans-serif;
}

:root {
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;

    --space-xxs: 4px;
    --space-xs: 8px;
    --space-sm: 16px;
    --space: 24px;
    --space-md: 32px;
    --space-lg: 48px;
    --space-xlg: 64px;
    --screen-xs: 360px;
    --screen-sm: 768px;
    --screen-md: 992px;
    --screen-lg: 1280px;
    --screen-xlg: 1440px;
}
`;
