# blog/serializers.py

from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    previous_post_id = serializers.SerializerMethodField()
    next_post_id = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'published_date', 'previous_post_id', 'next_post_id']

    def get_previous_post_id(self, obj):
        if obj.get_previous_post():
            return obj.get_previous_post().id
        return None

    def get_next_post_id(self, obj):
        if obj.get_next_post():
            return obj.get_next_post().id
        return None
