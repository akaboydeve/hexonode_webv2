'use client'

import React, { useState, useEffect } from 'react';
import { Server, Cpu, HardDrive, Zap, Shield, CheckCircle, Home, X, Clock, Globe, Database, Wifi, Info } from 'lucide-react';

function IndiaVPS() {
  const [selectedSection, setSelectedSection] = useState<string>('Intel Standard');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPlanDetails, setSelectedPlanDetails] = useState<Plan | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = ['Intel Standard', 'AMD EYPC 7', 'Ryzen 9/EYPC 9'];

  type Plan = {
    name: string;
    price: string;
    period: string;
    featured?: boolean;
    processor: string;
    cores: string;
    ram: string;
    storage: string;
    bandwidth: string;
    location: string;
    setupTime: string;
    features: string[];
    orderLink: string;
    detailedSpecs: {
      cpuModel: string;
      cpuCores: string;
      cpuSpeed: string;
      ramType: string;
      storageType: string;
      networkSpeed: string;
      virtualization: string;
      operatingSystem: string[];
      controlPanel: string;
      backups: string;
      monitoring: string;
      support: string;
    };
  };

  type PlansType = {
    [key: string]: Plan[];
  };

  const plans: PlansType = {
    'Intel Standard': [
      {
        name: "Standard Mini",
        price: "₹750",
        period: "/month",
        processor: "Intel E5-2680 v5",
        cores: "2 vCores (2.4-3 GHz)",
        ram: "8 GB DDR4",
        storage: "80 GB NVMe",
        bandwidth: "Unmetered",
        location: "Mumbai",
        setupTime: "Instant",
        features: ["Full Root Access", "99.9% Uptime", "24/7 Support", "DDoS Protection", "Free Setup", "KVM Virtualization", "1 IPv4"],
        orderLink: "https://billing.hexonode.com/products/india-vps-budget/8gb-budget-vps/checkout?plan=257&options=",
        detailedSpecs: {
          cpuModel: "Intel E5-2680 v5",
          cpuCores: "2 vCores",
          cpuSpeed: "2.4-3.0 GHz",
          ramType: "DDR4 ECC",
          storageType: "NVMe SSD RAID-10",
          networkSpeed: "1 Gbps",
          virtualization: "KVM",
          operatingSystem: ["Ubuntu", "CentOS", "Debian", "Windows Server"],
          controlPanel: "Custom Panel",
          backups: "Manual Backups",
          monitoring: "Advanced Monitoring",
          support: "24/7 Ticket Support"
        }
      },
      {
        name: "Standard Starter",
        price: "₹1,099",
        period: "/month",
        processor: "Intel E5-2680 v5",
        cores: "4 vCores (2.4-3.3 GHz)",
        ram: "32 GB DDR4",
        storage: "400 GB NVMe",
        bandwidth: "Unmetered",
        location: "Mumbai",
        setupTime: "Instant",
        features: ["Full Root Access", "99.9% Uptime", "24/7 Support", "DDoS Protection", "Free Setup", "KVM Virtualization", "1 IPv4"],
        orderLink: "https://billing.hexonode.com/products/india-vps-budget/32gb-vps-india-budeget",
        detailedSpecs: {
          cpuModel: "Intel E5-2680 v5",
          cpuCores: "4 vCores",
          cpuSpeed: "2.4-3.3 GHz",
          ramType: "DDR4 ECC",
          storageType: "NVMe SSD RAID-10",
          networkSpeed: "1 Gbps",
          virtualization: "KVM",
          operatingSystem: ["Ubuntu", "CentOS", "Debian", "Windows Server"],
          controlPanel: "Custom Panel",
          backups: "Manual Backups",
          monitoring: "Advanced Monitoring",
          support: "24/7 Ticket Support"
        }
      },
      {
        name: "Standard Extreme",
        price: "₹1,800",
        period: "/month",
        featured: true,
        processor: "Intel E5-2680 v5",
        cores: "8 vCores (2.4-3.3 GHz)",
        ram: "64 GB DDR4",
        storage: "500 GB NVMe",
        bandwidth: "Unmetered",
        location: "Mumbai",
        setupTime: "Instant",
        features: ["Full Root Access", "99.9% Uptime", "24/7 Support", "DDoS Protection", "Free Setup", "Free SSL", "KVM Virtualization", "1 IPv4"],
        orderLink: "https://billing.hexonode.com/products/india-vps-budget/64gb-vps-india-budeget",
        detailedSpecs: {
          cpuModel: "Intel E5-2680 v5",
          cpuCores: "8 vCores",
          cpuSpeed: "2.4-3.3 GHz",
          ramType: "DDR4 ECC",
          storageType: "NVMe SSD RAID-10",
          networkSpeed: "1 Gbps",
          virtualization: "KVM",
          operatingSystem: ["Ubuntu", "CentOS", "Debian", "Windows Server"],
          controlPanel: "Custom Panel",
          backups: "Manual Backups",
          monitoring: "Advanced Monitoring",
          support: "24/7 Priority Support"
        }
      }
    ],
    'AMD EYPC 7': [
      {
        name: "Performance Basic",
        price: "₹1299",
        period: "/month",
        processor: "AMD EYPC 7763/7313",
        cores: "4 vCores",
        ram: "16 GB DDR4",
        storage: "80 GB NVMe",
        bandwidth: "Unmetered",
        location: "Mumbai",
        setupTime: "2-3 Hours",
        features: ["Full Root Access", "99.9% Uptime", "Priority Support", "DDoS Protection", "Free Setup", "Free SSL", "KVM Virtualization", "1 IPv4"],
        orderLink: "https://billing.hexonode.com/products/india-amd-performance-vps/16gb-amd-performance-vps/checkout?edit=0&plan=254&options=",
        detailedSpecs: {
          cpuModel: "AMD EYPC 7763/7313",
          cpuCores: "4 vCores",
          cpuSpeed: "3.5 GHZ",
          ramType: "DDR4 ECC",
          storageType: "NVMe SSD RAID-10",
          networkSpeed: "1 Gbps",
          virtualization: "KVM",
          operatingSystem: ["Ubuntu", "CentOS", "Debian", "Windows Server"],
          controlPanel: "Custom Panel",
          backups: "Daily Backups",
          monitoring: "Premium Monitoring",
          support: "24/7 Priority Support"
        }
      },
      {
        name: "Performance Advanced",
        price: "₹1,900",
        period: "/month",
        processor: "AMD EYPC 7763/7313",
        cores: "8 vCores ",
        ram: "32 GB DDR4",
        storage: "100 to 150 GB NVMe",
        bandwidth: "Unmetered",
        location: "Mumbai",
        setupTime: "2-3 Hours",
        features: ["Full Root Access", "99.9% Uptime", "Priority Support", "DDoS Protection", "Free Setup", "Free SSL", "Daily Backups", "KVM Virtualization", "1 IPv4"],
        orderLink: "https://billing.hexonode.com/products/india-amd-performance-vps/32gb-amd-performance-vps/checkout?edit=1&plan=255&options=",
        detailedSpecs: {
          cpuModel: "AMD EYPC 7763/7313",
          cpuCores: "8 vCores",
          cpuSpeed: "3.5 GHz",
          ramType: "DDR4 ECC",
          storageType: "NVMe SSD RAID-10",
          networkSpeed: "1 Gbps",
          virtualization: "KVM",
          operatingSystem: ["Ubuntu", "CentOS", "Debian", "Windows Server"],
          controlPanel: "Custom Panel",
          backups: "Daily Backups",
          monitoring: "Premium Monitoring",
          support: "24/7 Priority Support"
        }
      },
      {
        name: "Performance Elite",
        price: "₹2,999",
        period: "/month",
        featured: true,
        processor: "AMD EYPC 7763/7313",
        cores: "16 vCores ",
        ram: "64 GB DDR4",
        storage: "250 to 300 GB NVMe",
        bandwidth: "Unmetered",
        location: "Mumbai",
        setupTime: "2-3 Hours",
        features: ["Full Root Access", "99.9% Uptime", "Dedicated Support", "DDoS Protection", "Free Setup", "Free SSL", "Daily Backups", "Priority Support", "KVM Virtualization", "1 IPv4"],
        orderLink: "https://billing.hexonode.com/products/india-amd-performance-vps/64gb-amd-performance-vps",
        detailedSpecs: {
          cpuModel: "AMD EYPC 7763/7313",
          cpuCores: "16 vCores",
          cpuSpeed: "3.5 GHZ",
          ramType: "DDR4 ECC",
          storageType: "NVMe SSD RAID-10",
          networkSpeed: "1 Gbps",
          virtualization: "KVM",
          operatingSystem: ["Ubuntu", "CentOS", "Debian", "Windows Server"],
          controlPanel: "Custom Panel",
          backups: "Daily Backups",
          monitoring: "Premium Monitoring",
          support: "24/7 Dedicated Support"
        }
      }
    ],
    'Ryzen 9/EYPC 9': [
      {
        name: "Ryzen Power",
        price: "₹1,699",
        period: "/month",
        processor: "Ryzen 9 5900x",
        cores: "4 Cores 3.7 ghz to 4.8 ghz",
        ram: "16 GB RAM",
        storage: "80 GB NVMe",
        bandwidth: "2tb",
        location: "Mumbai",
        setupTime: "20 mins",
        features: ["Full Root Access", "99.9% Uptime", "Gaming Support", "Gaming DDoS Protection", "Free Setup", "Free SSL", "KVM Virtualization", "1 IPv4"],
        orderLink: "https://billing.hexonode.com/products/india-vps-ultra/16gb-vps-india-ultra",
        detailedSpecs: {
          cpuModel: "Ryzen 9 5900x",
          cpuCores: "4 vCores",
          cpuSpeed: "3.7 ghz to 4.8 ghz",
          ramType: "DDR4 RAM",
          storageType: "NVMe",
          networkSpeed: "1 Gbps",
          virtualization: "KVM",
          operatingSystem: ["Ubuntu", "CentOS", "Debian", "Windows Server"],
          controlPanel: "Custom Panel",
          backups: "Daily Backups Manually",
          monitoring: "Gaming Optimized Monitoring",
          support: "24/7 Gaming Support"
        }
      },
      {
        name: "Ryzen Ultimate",
        price: "₹3,200",
        period: "/month",
        featured: true,
        processor: "Ryzen 9 5900x",
        cores: "6 Cores 3.7 ghz to 4.80 ghz",
        ram: "32 GB ",
        storage: "130 GB NVMe",
        bandwidth: "4tb",
        location: "Mumbai",
        setupTime: "2-3 Hours",
        features: ["Full Root Access", "99.9% Uptime", "Priority Gaming Support", "Gaming DDoS Protection", "Free Setup", "Free SSL", "Daily Backups", "KVM Virtualization", "1 IPv4"],
        orderLink: "https://billing.hexonode.com/products/india-vps-ultra/32gb-vps-india-ultra",
        detailedSpecs: {
          cpuModel: "Ryzen 9 5900x",
          cpuCores: "6 Cores",
          cpuSpeed: "4.8 GHz",
          ramType: "DDR4 RAM",
          storageType: "NVMe",
          networkSpeed: "1 Gbps",
          virtualization: "KVM",
          operatingSystem: ["Ubuntu", "CentOS", "Debian", "Windows Server"],
          controlPanel: "Custom Panel",
          backups: "Daily Backups Manually",
          monitoring: "Gaming Optimized Monitoring",
          support: "24/7 Priority Gaming Support"
        }
      },
      {
        name: "Ryzen Extreme",
        price: "₹6,300",
        period: "/month",
        processor: "Ryzen 9 5900x",
        cores: "8 Cores 3.7 ghz to 4.80 ghz",
        ram: "64 GB RAM",
        storage: "200 GB NVMe",
        bandwidth: "8TB",
        location: "Mumbai",
        setupTime: "2-3 Hours",
        features: ["Full Root Access", "99.9% Uptime", "Dedicated Gaming Support", "Enterprise Gaming DDoS Protection", "Free Setup", "Free SSL", "Daily Backups", "Priority Support", "KVM Virtualization", "1 IPv4"],
        orderLink: "https://billing.hexonode.com/products/india-vps-ultra/64gb-vps-india-ultra",
        detailedSpecs: {
          cpuModel: "Ryzen 9 5900x",
          cpuCores: "8 vCores",
          cpuSpeed: "4.8 GHz",
          ramType: "DDR4",
          storageType: "NVMe",
          networkSpeed: "1 Gbps",
          virtualization: "KVM",
          operatingSystem: ["Ubuntu", "CentOS", "Debian", "Windows Server"],
          controlPanel: "Custom Panel",
          backups: "Daily Backups Manually",
          monitoring: "Gaming Optimized Monitoring",
          support: "24/7 Dedicated Gaming Support"
        }
      }
    ]
  };

  const handleSectionChange = (section: string) => {
    if (section !== selectedSection && !isAnimating) {
      setIsAnimating(true);

      // Small delay to allow fade out
      setTimeout(() => {
        setSelectedSection(section);
        setTimeout(() => setIsAnimating(false), 100);
      }, 200);
    }
  };

  const goBackToHome = () => {
    window.location.href = '/';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const openPlanDetails = (plan: Plan) => {
    setSelectedPlanDetails(plan);
  };

  const closePlanDetails = () => {
    setSelectedPlanDetails(null);
  };

  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'Intel Standard':
        return <Cpu className="w-5 h-5" />;
      case 'AMD EYPC 7':
        return <Zap className="w-5 h-5" />;
      case 'Ryzen 9/EYPC 9':
        return <Shield className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  const getSectionColor = (section: string) => {
    switch (section) {
      case 'Intel Standard':
        return 'from-blue-500 to-cyan-500';
      case 'AMD EYPC 7':
        return 'from-purple-500 to-violet-500';
      case 'Ryzen 9/EYPC 9':
        return 'from-red-500 to-orange-500';
      default:
        return 'from-blue-500 to-cyan-500';
    }
  };

  const getCpuModelName = (section: string) => {
    switch (section) {
      case 'Intel Standard':
        return 'Intel E5-2680 v4 2.4 to 3.3 ghz';
      case 'AMD EYPC 7':
        return 'AMD EYPC 7763 / 7313 3.0 TO 3.7 GHZ';
      case 'Ryzen 9/EYPC 9':
        return 'Ryzen 9 5900x 4.8 ghz';
      default:
        return 'High Performance Processors';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Hexonode
              </span>
            </button>

            <button
              onClick={goBackToHome}
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </button>

            {/* Payment Methods Button */}
            <button
              onClick={openPaymentModal}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25"
            >
              Payment Methods
            </button>
          </div>
        </div>
      </nav>

      {/* Payment Methods Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-b border-slate-700/50 p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <span className="text-2xl">💳</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      Payment Methods
                    </h2>
                    <p className="text-slate-400 text-sm">Choose your preferred payment option</p>
                  </div>
                </div>
                <button
                  onClick={closePaymentModal}
                  className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <X className="w-5 h-5 text-slate-300" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Indian Payment Methods */}
              <div className="group">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">🇮🇳</span>
                  <h3 className="text-xl font-bold text-white">INDIAN PAYMENT METHODS</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📱</span>
                      <span className="text-white font-medium">UPI</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🏦</span>
                      <span className="text-white font-medium">Bank Transfer</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pakistani Payment Methods */}
              <div className="group">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">🇵🇰</span>
                  <h3 className="text-xl font-bold text-white">PAKISTANI PAYMENT METHODS</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📱</span>
                      <span className="text-white font-medium">JazzCash</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💳</span>
                      <span className="text-white font-medium">EasyPaisa</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🏦</span>
                      <span className="text-white font-medium">Bank Transfer</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* International Payment Methods */}
              <div className="group">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">🌍</span>
                  <h3 className="text-xl font-bold text-white">INTERNATIONAL PAYMENT METHODS</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💰</span>
                      <span className="text-white font-medium">PayPal</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Crypto Payment Methods */}
              <div className="group">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">₿</span>
                  <h3 className="text-xl font-bold text-white">CRYPTO METHODS</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💎</span>
                      <span className="text-white font-medium">USDT</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🪙</span>
                      <span className="text-white font-medium">Litecoin</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🐕</span>
                      <span className="text-white font-medium">Dogecoin</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-slate-700/50 p-6">
              {/* Disclaimer */}
              <div className="mb-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <p className="text-amber-300 text-sm text-center">
                  <span className="font-semibold">Disclaimer:</span> Only Indian and International payment methods are available on the website. For Pakistani and Crypto payments, please create a ticket on Discord.
                </p>
              </div>

              <button
                onClick={closePaymentModal}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Plan Details Modal */}
      {selectedPlanDetails && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-b border-slate-700/50 p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getSectionColor(selectedSection)} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {getSectionIcon(selectedSection)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      {selectedPlanDetails.name} - Detailed Specifications
                    </h2>
                    <p className="text-slate-400 text-sm">Complete technical specifications and features</p>
                  </div>
                </div>
                <button
                  onClick={closePlanDetails}
                  className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <X className="w-5 h-5 text-slate-300" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Price Section */}
              <div className="text-center bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-6">
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    {selectedPlanDetails.price}
                  </span>
                  <span className="text-slate-400 ml-2 text-lg">{selectedPlanDetails.period}</span>
                </div>
                <p className="text-slate-300">Starting price for {selectedPlanDetails.name}</p>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* CPU Specifications */}
                <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-slate-600/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Cpu className="w-5 h-5 mr-2 text-violet-400" />
                    CPU Specifications
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Model:</span>
                      <span className="text-white font-medium">{selectedPlanDetails.detailedSpecs.cpuModel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Cores:</span>
                      <span className="text-white font-medium">{selectedPlanDetails.detailedSpecs.cpuCores}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Speed:</span>
                      <span className="text-white font-medium">{selectedPlanDetails.detailedSpecs.cpuSpeed}</span>
                    </div>
                  </div>
                </div>

                {/* Memory & Storage */}
                <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-slate-600/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Database className="w-5 h-5 mr-2 text-emerald-400" />
                    Memory & Storage
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">RAM:</span>
                      <span className="text-white font-medium">{selectedPlanDetails.ram}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">RAM Type:</span>
                      <span className="text-white font-medium">{selectedPlanDetails.detailedSpecs.ramType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Storage:</span>
                      <span className="text-white font-medium">{selectedPlanDetails.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Storage Type:</span>
                      <span className="text-white font-medium">{selectedPlanDetails.detailedSpecs.storageType}</span>
                    </div>
                  </div>
                </div>

                {/* Network & Location */}
                <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-slate-600/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-blue-400" />
                    Network & Location
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Bandwidth:</span>
                      <span className="text-white font-medium">{selectedPlanDetails.bandwidth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Network Speed:</span>
                      <span className="text-white font-medium">{selectedPlanDetails.detailedSpecs.networkSpeed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Location:</span>
                      <span className="text-white font-medium">{selectedPlanDetails.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Setup Time:</span>
                      <span className="text-white font-medium">{selectedPlanDetails.setupTime}</span>
                    </div>
                  </div>
                </div>

                {/* System & Support */}
                <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-slate-600/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-orange-400" />
                    System & Support
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Virtualization:</span>
                      <span className="text-white font-medium">{selectedPlanDetails.detailedSpecs.virtualization}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Control Panel:</span>
                      <span className="text-white font-medium">{selectedPlanDetails.detailedSpecs.controlPanel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Backups:</span>
                      <span className="text-white font-medium">{selectedPlanDetails.detailedSpecs.backups}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Support:</span>
                      <span className="text-white font-medium">{selectedPlanDetails.detailedSpecs.support}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Systems */}
              <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-slate-600/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <HardDrive className="w-5 h-5 mr-2 text-green-400" />
                  Supported Operating Systems
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {selectedPlanDetails.detailedSpecs.operatingSystem.map((os, index) => (
                    <div key={index} className="bg-slate-800/50 border border-slate-600/30 rounded-lg p-3 text-center">
                      <span className="text-white font-medium">{os}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-slate-600/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-emerald-400" />
                  Included Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedPlanDetails.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-slate-700/50 p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={closePlanDetails}
                  className="flex-1 bg-slate-700/50 hover:bg-slate-600/50 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Close Details
                </button>
                <a
                  href={selectedPlanDetails.orderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-300 text-center"
                >
                  Order This Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Simplified Hero Section */}
      <section className="pt-24 pb-8 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-6">
            <span className="text-2xl">🇮🇳</span>
            <span className="text-slate-300 text-sm">India VPS Hosting</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
            VPS Hosting Solutions
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
            High-performance VPS hosting in India with different processor categories to match your needs
          </p>
        </div>
      </section>

      {/* Section Selection and Plans */}
      <section className="py-8 relative bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Select Your Category
            </h2>

            {/* CPU Model Name Display */}
            <div className="mb-6 p-4 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-2">
                <Cpu className="w-6 h-6 text-violet-400 mr-2" />
                <h3 className="text-xl font-bold text-white">CPU Model</h3>
              </div>
              <p className="text-violet-300 text-lg font-semibold">
                {getCpuModelName(selectedSection)}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => handleSectionChange(section)}
                  disabled={isAnimating}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm ${selectedSection === section
                    ? `bg-gradient-to-r ${getSectionColor(section)} text-white shadow-lg`
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 border border-slate-700/50'
                    } ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {getSectionIcon(section)}
                  <span>{section}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Plans Grid with Animation */}
          <div className={`grid gap-6 grid-cols-1 lg:grid-cols-3 transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
            {plans[selectedSection].map((plan: Plan, index: number) => (
              <div
                key={`${selectedSection}-${index}`}
                className={`group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border rounded-3xl p-6 transition-all duration-300 hover:shadow-xl animate-slide-in-up ${plan.featured
                  ? `border-violet-500/70 shadow-violet-500/20 shadow-xl scale-105`
                  : 'border-slate-700/50 hover:border-violet-500/50 hover:shadow-violet-500/20'
                  }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${getSectionColor(selectedSection)} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      {getSectionIcon(selectedSection)}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  {/* Key Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-slate-800/40 rounded-xl p-3 text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Cpu className="w-4 h-4 text-violet-400 mr-1" />
                      </div>
                      <div className="text-xs text-slate-400 mb-1">Processor</div>
                      <div className="text-white font-medium text-sm">{plan.cores}</div>
                    </div>
                    <div className="bg-slate-800/40 rounded-xl p-3 text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Database className="w-4 h-4 text-emerald-400 mr-1" />
                      </div>
                      <div className="text-xs text-slate-400 mb-1">Memory</div>
                      <div className="text-white font-medium text-sm">{plan.ram}</div>
                    </div>
                    <div className="bg-slate-800/40 rounded-xl p-3 text-center">
                      <div className="flex items-center justify-center mb-1">
                        <HardDrive className="w-4 h-4 text-blue-400 mr-1" />
                      </div>
                      <div className="text-xs text-slate-400 mb-1">Storage</div>
                      <div className="text-white font-medium text-sm">{plan.storage}</div>
                    </div>
                    <div className="bg-slate-800/40 rounded-xl p-3 text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Wifi className="w-4 h-4 text-orange-400 mr-1" />
                      </div>
                      <div className="text-xs text-slate-400 mb-1">Network</div>
                      <div className="text-white font-medium text-sm">{plan.bandwidth}</div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-300 text-sm">{plan.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-300 text-sm">{plan.setupTime}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {plan.features.slice(0, 4).map((feature: string, featureIndex: number) => (
                        <span
                          key={featureIndex}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20"
                        >
                          {feature}
                        </span>
                      ))}
                      {plan.features.length > 4 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-500/10 text-slate-400 border border-slate-500/20">
                          +{plan.features.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => openPlanDetails(plan)}
                      className="w-full bg-slate-700/50 hover:bg-slate-600/50 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Info className="w-4 h-4" />
                      <span>Show More Details</span>
                    </button>

                    <a
                      href={plan.orderLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center ${plan.featured
                        ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700 shadow-lg shadow-violet-500/25'
                        : 'bg-gradient-to-r from-violet-500/20 to-purple-600/20 border border-violet-500/30 text-violet-300 hover:from-violet-500 hover:to-purple-600 hover:text-white hover:border-transparent'
                        }`}
                    >
                      <span>Order Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Resources Notice */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto hover:border-violet-500/50 hover:shadow-violet-500/20 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25">
                  <span className="text-2xl">💬</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Need More Resources?
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Looking for higher specifications or custom configurations? We have more powerful options available.
              </p>
              <a
                href="https://discord.hexonode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-violet-500/25"
              >
                <span>💬</span>
                <span>Contact us on Discord</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center space-x-3 mb-6 mx-auto hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Server className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Hexonode
              </span>
            </button>

            <p className="text-slate-400 mb-8 text-lg max-w-md mx-auto">
              Powering the web with reliable and fast hosting solutions
            </p>

            <div className="pt-8 border-t border-slate-800 text-slate-500">
              <p>&copy; 2024 Hexonode. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.3s ease-in-out;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0; 
            transform: scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default IndiaVPS;
