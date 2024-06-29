// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Example of changing the resume content dynamically
    document.getElementById('name').innerText = 'Abasifreke Nkanang (DataBishop)';
    document.getElementById('summary').innerText = 'Experienced Data Engineer/Analyst with experience in DevOps and Cloud computing. I am interested in making life easier by ensuring the availability of data and enhancing its use for informed decision-making.';
    document.getElementById('job-title').innerText = 'DevOps Intern';
    document.getElementById('job-duration').innerText = 'June 2024 - Present';
    document.getElementById('job-description').innerHTML = `
        <li>Develop and maintain scripts to automate various processes such as code deployment, system monitoring, and server provisioning.</li>
        <li>Assist in the setup and maintenance of Continuous Integration and Continuous Deployment (CI/CD) pipelines.</li>
        <li>Implement and configure monitoring and logging solutions to track the performance and health of applications and infrastructure.</li>
    `;
    document.getElementById('education').innerText = 'Bachelor of Engineering in Computer Engineering, University of Uyo, 2023';
    document.getElementById('skills').innerHTML = `
        <li>Programming Languages – Python, R, SQL</li>
        <li>ETL/ELT Tools – Apache Spark, Apache Airflow, AWS Glue</li>
        <li>Cloud Technologies – AWS, Google Cloud Platform</li>
        <li>Data Warehousing – Amazon Redshift. Google BigQuery</li>
        <li>Data Visualization – Tableau, Power Bi</li>
        <li>Soft Skills – Leadership, Critical thinking, Problem solving, Teamwork, Time management</li>
        <li>Automation tools – Jenkins, GitLab CI, CircleCI, Travis CI</li>
        <li>Containerization and Orchestration – Docker, Kubernetes </li>
    `;

});
