#  Digital Clock 

A responsive digital clock application built with **Angular** and **Django**. It displays the current time, date, and day, with options to customize the clock display.

**Live Demo:** https://digital-clock-frontend-naak.onrender.com/

🔌 **Backend API:** https://digital-clock-5zut.onrender.com/api/time/

##  Features

- 🕒 Real-time digital clock
- 📅 Displays the current date and day
- 🌓 Switch between light and dark themes
- ⏱️ Toggle between 12-hour and 24-hour formats
- 👁️ Show or hide seconds
- 📋 Copy the current time to the clipboard
- 🔗 Angular frontend integrated with a Django REST-style JSON endpoint
- 🧪 Django backend tests
- ⚙️ GitHub Actions CI for frontend builds and backend tests
- ☁️ Deployed on Render

##  Tech Stack

| Technology | Purpose |
|---|---|
| Angular | Frontend application |
| TypeScript | Frontend logic |
| HTML & CSS | Structure and styling |
| Python | Backend language |
| Django | Backend API |
| Gunicorn | Production application server |
| Git & GitHub | Version control |
| GitHub Actions | Continuous integration |
| Render | Deployment and hosting |

## 📁 Project Structure

```text
digital-clock/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── package-lock.json
├── backend/
│   ├── clock/
│   │   ├── tests.py
│   │   └── views.py
│   ├── config/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── manage.py
│   └── requirements.txt
├── .github/
│   └── workflows/
└── README.md
```

##  Getting Started

Follow these steps to run the project locally.

### Prerequisites

Install the following tools:

- [Node.js and npm](https://nodejs.org/)
- [Python](https://www.python.org/)
- [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/PriyankaA-PS/digital_clock.git
cd digital_clock
```

### 2. Set up the Django backend

Navigate to the backend directory:

```bash
cd backend
```

Create and activate a Python virtual environment.

**macOS / Linux:**

```bash
python3 -m venv venv
source venv/bin/activate
```

Install the dependencies:

```bash
pip install -r requirements.txt
```

Apply database migrations:

```bash
python manage.py migrate
```

Start the Django development server:

```bash
python manage.py runserver
```

The backend will be available at:

http://127.0.0.1:8000/

Clock API endpoint:

http://127.0.0.1:8000/api/time/

### 3. Set up the Angular frontend

Open a new terminal and navigate to the frontend directory:

```bash
cd digital_clock/frontend
```

Install the dependencies:

```bash
npm ci
```

Start the Angular development server:

```bash
npm start
```

If an `npm start` script is not configured, use:

```bash
npx ng serve
```

Open the local frontend URL printed by Angular, usually:

http://localhost:4200/

**Note:** Ensure the Angular API URL points to your local Django server when developing locally, or to the deployed backend when running the live application. Django CORS settings must allow the frontend origin.

## 🔌 API Reference

### Get the current time

**Endpoint:** `GET /api/time/`

**Local URL:**

```text
http://127.0.0.1:8000/api/time/
```

**Production URL:**

```text
https://digital-clock-5zut.onrender.com/api/time/
```

**Example JSON response:**

```json
{
  "time": "16:30:45",
  "date": "17-10-2026",
  "day": "Saturday"
}
```

The response contains:

| Field | Description |
|---|---|
| `time` | Current time in 24-hour format |
| `date` | Current date in `DD-MM-YYYY` format |
| `day` | Current weekday name |

The displayed time format can be changed in the Angular frontend.

## 🧪 Running Tests

Run the Django backend tests from the `backend/` directory:

```bash
python manage.py test clock
```

Build the Angular application from the `frontend/` directory:

```bash
npm run build
```

Check frontend dependencies for known security vulnerabilities:

```bash
npm audit
```

## 🔄 Continuous Integration

GitHub Actions can automatically validate pull requests by:

- Installing Angular dependencies and building the frontend.
- Installing Python dependencies and running Django tests.
- Checking dependency security when configured in the workflow.

Workflow configuration:

```text
.github/workflows/pr-ci.yml
```

## ☁️ Deployment

The application is deployed on [Render](https://render.com/).

| Component | Deployment type |
|---|---|
| Angular frontend | Render Static Site |
| Django backend | Render Web Service |

The frontend communicates with the backend through the deployed API endpoint.

**Hosting note:** Free web services may sleep when inactive, so the first backend request after inactivity can take longer. Free hosting limits and availability may change.

## 🎯 Learning Objectives

This project demonstrates practical experience with:

- Building a frontend using Angular and TypeScript.
- Creating API endpoints with Django.
- Integrating a frontend with a backend over HTTP.
- Managing reactive UI state.
- Writing backend unit tests.
- Managing dependencies and Git branches.
- Automating builds and tests using GitHub Actions.
- Deploying a full-stack application.

## 📄 License

This project is available for learning and personal use. Add a `LICENSE` file if you want to specify formal permissions for reuse and distribution.

---

**Built with Angular, Django, and curiosity.** 🚀
