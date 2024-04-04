# api/serializers.py

from rest_framework import serializers
from products.models import Product  # Import the Product model from the products app
from order.models import Order, OrderItem
from user.serializers import UserSerializer

# Meta Class:

# Inside the ProductSerializer class, there's a nested Meta class.
# The Meta class contains metadata about the serializer, including which model it should serialize (model = Product).
# The fields attribute specifies which fields from the Product model should be included in the serialized representation.
# In this case, it includes fields like id, name, price, etc.

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'image_url', 'weight', 'country_of_origin', 'quality', 'category','description']

class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()  # Using ProductSerializer directly here

    class Meta:
        model = OrderItem
        fields = ['id','product', 'quantity']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, source='orderitem_set')  # Assuming reverse relationship is orderitem_set

    class Meta:
        model = Order
        fields = ['id', 'user', 'items'] 