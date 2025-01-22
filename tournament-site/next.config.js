
export default function Home() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fairwind Falcons Dodgeball Tournament</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <style jsx global>{`
          /* Copy all your CSS here, exactly as it was */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          :root {
            --primary: #0066cc;
            --primary-light: #87CEEB;
            --accent: #000000;
            --text: #333333;
            --background: #ffffff;
          }

          /* ... rest of your CSS ... */
        `}</style>
      </head>

      {/* Main content starts here */}
      <header>
        <h1>Fairwind Falcons Dodgeball Tournament</h1>
        <p>Professional Tournament Management System</p>
      </header>

      {/* ... rest of your HTML content ... */}

      <script dangerouslySetInnerHTML={{
        __html: `
          // Your JavaScript code here
          function showDivision(event, divisionNumber) {
            if (event) {
              event.preventDefault();
            }
            const buttons = document.querySelectorAll('.division-btn');
            const sections = document.querySelectorAll('.division-section');
            buttons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(\`btn-\${divisionNumber}\`).classList.add('active');
            document.getElementById(\`division-\${divisionNumber}\`).classList.add('active');
          }
          document.addEventListener('DOMContentLoaded', function() {
            showDivision(null, '6');
          });
        `
      }} />
    </>
  )
}
