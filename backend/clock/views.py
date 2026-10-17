from django.http import JsonResponse
from django.utils import timezone


def current_time(request):
    now = timezone.localtime()

    return JsonResponse({
        "time": now.strftime("%H:%M:%S"),
        "date": now.strftime("%d-%m-%Y"),
        "day": now.strftime("%A"),
    })