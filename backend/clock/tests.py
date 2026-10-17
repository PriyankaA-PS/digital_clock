from django.test import TestCase
from django.urls import reverse


class CurrentTimeTests(TestCase):

    def test_current_time_returns_success(self):
        response = self.client.get("/api/time/")

        self.assertEqual(response.status_code, 200)

    def test_current_time_returns_expected_fields(self):
        response = self.client.get("/api/time/")

        data = response.json()

        self.assertEqual(
            set(data.keys()),
            {"time", "date", "day"}
        )

    def test_current_time_formats_are_correct(self):
        response = self.client.get("/api/time/")
        data = response.json()

        self.assertRegex(data["time"], r"^\d{2}:\d{2}:\d{2}$")
        self.assertRegex(data["date"], r"^\d{2}-\d{2}-\d{4}$")
        self.assertIn(
            data["day"],
            ["Monday", "Tuesday", "Wednesday", "Thursday",
             "Friday", "Saturday", "Sunday"]
        )