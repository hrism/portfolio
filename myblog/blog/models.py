from django.db import models
from django.utils.safestring import mark_safe
import markdown

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    published_date = models.DateTimeField(auto_now_add=True)

    def get_markdown(self):
        # MarkdownテキストをHTMLに変換し、信頼できるHTMLマークアップとしてマーク
        return mark_safe(markdown.markdown(self.content))

    def __str__(self):
        return self.title

    def get_previous_post(self):
        return Post.objects.filter(id__lt=self.id).order_by('-id').first()

    def get_next_post(self):
        return Post.objects.filter(id__gt=self.id).order_by('id').first()
