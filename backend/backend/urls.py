from django.urls import path
from .views import Index
from django.urls import path, include

urlpatterns = [
    path('', Index.as_view(), name='Index'),  # 添加 index 視圖的 URL
    path('api/', include('api.urls')),
]
