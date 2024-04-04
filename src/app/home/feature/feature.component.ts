import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent {
  Features = [
    { feature: "Free Shipping", description: "Free on order over $300", classi: "fas fa-car-side fa-3x text-white" },
    { feature: "Security Payment", description: "100% security payment", classi: "fas fa-user-shield fa-3x text-white" },
    { feature: "30 Day Return", description: "30 day money guarantee", classi: "fas fa-exchange-alt fa-3x text-white" },
    { feature: "24/7 Support", description: "Support every time fast", classi: "fa fa-phone-alt fa-3x text-white" }
  ];
}
