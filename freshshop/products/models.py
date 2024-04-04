from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image_url = models.URLField()
    weight = models.CharField(max_length=50)
    country_of_origin = models.CharField(max_length=100)
    quality = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    description = models.TextField(default='')  # New field for description

    def __str__(self):
        return self.name
