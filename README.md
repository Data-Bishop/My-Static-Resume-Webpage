# Resume Webpage

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)

## Description

This repository contains the source code for a static resume webpage. The webpage is built using HTML, CSS, and JavaScript and is designed to showcase personal information, work experience, education, skills, and projects in a clean and professional format.

### Features

- **Responsive Design:** The webpage is designed to be fully responsive, ensuring it looks great on all devices, from desktops to mobile phones.
- **Modern UI:** Utilizes modern HTML5, CSS3, and JavaScript features to provide a sleek and engaging user experience.
- **Customization:** The code is well-organized and commented, making it easy to customize with your own information and styling.

### Technologies Used

- **HTML5:** For the structure of the webpage.
- **CSS3:** For styling and layout.
- **JavaScript:** For interactive elements and enhanced user experience.

### Deployment

This project was part of the Stage 0 task of the HNG 11 Internship for the DevOps track. The webpage was deployed onto an AWS EC2 instance and served using NGINX.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed:

- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/resume-webpage.git
   ```

2. Navigate to the project directory:
   ```bash
   cd resume-webpage
   ```

3. Open `index.html` in your web browser to view the webpage.

### Deployment Instructions

To deploy this static webpage on AWS EC2 and serve it using NGINX, follow these steps (An Ubuntu Image is being used for this guide):

1. **Launch an EC2 Instance:**
   - Choose Amazon Linux 2 AMI.
   - Configure instance details, add storage, and configure security group to allow HTTP (port 80) and SSH (port 22) traffic.

2. **Connect to Your EC2 Instance:**
   ```bash
   ssh -i "path/to/your-key.pem" ec2-user@your-ec2-public-ip
   ```

3. **Update and Install NGINX:**
   ```bash
   sudo apt update && up sudo apt upgrade -y
   sudo apt install nginx -y
   sudo systemctl start nginx
   sudo systemctl enable nginx
   ```

4. **Upload Your Static Website Files to EC2 Instance:**
   ```bash
   scp -i "path/to/your-key.pem" -r . ec2-user@your-ec2-public-ip:/home/ec2-user/
   ```

5. **Move Files to NGINX Directory:**
   ```bash
   sudo mv /home/ec2-user/index.html /usr/share/nginx/html/
   sudo mv /home/ec2-user/script.js /usr/share/nginx/html/
   sudo mv /home/ec2-user/styles.css /usr/share/nginx/html/
   ```

6. **Restart NGINX:**
   ```bash
   sudo systemctl restart nginx
   ```

7. **Access Your Website:**
   Open your web browser and navigate to your EC2 instance's public IP address:
   ```http
   http://your-ec2-public-ip
   ```

## License

Distributed under the MIT License. See `LICENSE` for more information.
