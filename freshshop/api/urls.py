# urls.py
from django.urls import path
from .views import ProductList, OrderListCreateAPIView, OrderRetrieveUpdateDestroyAPIView, OrderItemCreateAPIView, OrderItemDetailView,OrderItemUpdateQuantityAPIView,OrderItemAddAPIView,ProductDetailView

urlpatterns = [
    path('products/', ProductList.as_view(), name='product_list'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product_detail'),
    path('orders/', OrderListCreateAPIView.as_view(), name='order-list'),
    path('orders/<int:pk>/', OrderRetrieveUpdateDestroyAPIView.as_view(), name='order-detail'),
    path('order-items/', OrderItemCreateAPIView.as_view(), name='orderitem-create'),
    path('orders/<int:orderId>/items/<int:itemPk>/', OrderItemDetailView.as_view(), name='order-item-detail'),
    path('orders/<int:orderId>/items/<int:itemPk>/update/', OrderItemUpdateQuantityAPIView.as_view(), name='order-item-update-quantity'),
    path('orders/<int:orderId>/items/<int:productId>/add/', OrderItemAddAPIView.as_view(), name='order-item-add'),
]
