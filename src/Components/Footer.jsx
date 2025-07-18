import React from 'react'

function Footer() {
  return (
     <footer class="bg-sky-600 text-white py-10 px-6">
    <div class="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 text-center md:text-left">
        <div class="space-y-3">
            <h4 class="text-xl font-semibold">About DocPen</h4>
            <p class="text-sm leading-relaxed">
                DocPen is your trusted online platform for convenient doctor consultations,
                e-prescriptions, and seamless medication management, ensuring your health is always prioritized.
            </p>
        </div>

        <div class="space-y-3">
            <h4 class="text-xl font-semibold">Quick Links</h4>
            <ul class="space-y-1 text-sm">
                <li><a href="#home" class="text-white hover:underline block">Home</a></li>
                <li><a href="#how-it-works" class="text-white hover:underline block">How It Works</a></li>
                <li><a href="#services" class="text-white hover:underline block">Services</a></li>
                <li><a href="#faq" class="text-white hover:underline block">FAQ</a></li>
                <li><a href="#privacy" class="text-white hover:underline block">Privacy Policy</a></li>
            </ul>
        </div>

        <div class="space-y-3">
            <h4 class="text-xl font-semibold">Contact Us</h4>
            <div class="flex items-center gap-2 justify-center md:justify-start text-sm">
                <span class="material-symbols-outlined text-base">phone</span>
                <span>+91 98765 43210</span>
            </div>
            <div class="flex items-center gap-2 justify-center md:justify-start text-sm">
                <span class="material-symbols-outlined text-base">email</span>
                <span>support@docpen.com</span>
            </div>
            <div class="flex justify-center text-white md:justify-start gap-4 text-xl mt-2">
                <a href="#" class="text-white hover:text-white transition"><span class="material-symbols-outlined">facebook</span></a>
                <a href="#" class="text-white hover:text-white transition"><span class="material-symbols-outlined">apps</span></a> <a href="#" class="text-white hover:text-white transition"><span class="material-symbols-outlined">share</span></a> </div>
        </div>
    </div>

    <div class="mt-10 border-t border-sky-400 pt-4 text-center text-sm text-sky-100">
        &copy; 2025 DocPen. All rights reserved.
    </div>
</footer>
  )
}

export default Footer