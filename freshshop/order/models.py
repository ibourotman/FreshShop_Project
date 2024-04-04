from django.db import models
from user.models import User
from products.models import Product

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # Add more fields as needed

    def __str__(self):
        return f"Order #{self.pk} - {self.user.username}"

class OrderItem(models.Model):
    id = models.AutoField(primary_key=True)  # Add the id attribute
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    # Add more fields as needed

    def __str__(self):
        return f"OrderItem - Order #{self.order.pk}, Product: {self.product.name}, Quantity: {self.quantity}"
