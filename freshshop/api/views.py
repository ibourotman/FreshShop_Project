from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .serializers import ProductSerializer, OrderSerializer, OrderItemSerializer
from products.models import Product
from order.models import Order, OrderItem

class ProductList(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class ProductDetailView(APIView):
    def get(self, request, pk):
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

class OrderListCreateAPIView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderItemCreateAPIView(generics.CreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class OrderItemDetailView(generics.RetrieveDestroyAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
    lookup_url_kwarg = 'itemPk'

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, pk=self.kwargs[self.lookup_url_kwarg])
        return obj

class OrderItemUpdateQuantityAPIView(APIView):
    def patch(self, request, orderId, itemPk):
        try:
            order_item = OrderItem.objects.get(order_id=orderId, pk=itemPk)
        except OrderItem.DoesNotExist:
            return Response({"detail": "Order item not found."}, status=status.HTTP_404_NOT_FOUND)
        
        quantity = request.data.get('quantity')
        if not quantity or not quantity.isdigit() or int(quantity) <= 0:
            return Response({"detail": "Invalid quantity provided."}, status=status.HTTP_400_BAD_REQUEST)
        
        order_item.quantity = quantity
        order_item.save()

        serializer = OrderItemSerializer(order_item)
        return Response(serializer.data)

class OrderItemAddAPIView(APIView):
    def post(self, request, orderId, productId):
        try:
            order = Order.objects.get(pk=orderId)
            product = Product.objects.get(pk=productId)
        except Order.DoesNotExist:
            return Response({"detail": "Order not found."}, status=status.HTTP_404_NOT_FOUND)
        except Product.DoesNotExist:
            return Response({"detail": "Product not found."}, status=status.HTTP_404_NOT_FOUND)
        
        quantity = str(request.data.get('quantity', 1))
        if not quantity or not quantity.isdigit() or int(quantity) <= 0:
            return Response({"detail": "Invalid quantity provided."}, status=status.HTTP_400_BAD_REQUEST)
        
        order_item = OrderItem.objects.create(order=order, product=product, quantity=quantity)
        serializer = OrderItemSerializer(order_item)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
