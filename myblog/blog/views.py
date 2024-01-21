from rest_framework import viewsets
from rest_framework.response import Response
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-published_date')  # 新しい投稿から表示
    serializer_class = PostSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)

        response_data = serializer.data
        previous_post = instance.get_previous_post()
        next_post = instance.get_next_post()

        # 前後のポストの情報を含める
        response_data['previous_post_id'] = previous_post.id if previous_post else None
        response_data['next_post_id'] = next_post.id if next_post else None

        return Response(response_data)
