from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task
# Create your views here.
# Con una sola clase se puede realizar el CRUD 

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()