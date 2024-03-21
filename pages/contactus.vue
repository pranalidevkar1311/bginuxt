<template>
  <div class="bg-white py-10">
    <div>
        <div class="max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto default-form">
            <div class="grid lg:grid-cols-2 gap-4">
                <div class="pr-10 text-2xl sm:px-8"><h1>Good news! Waitlist reopening soon…</h1>
<p>Meanwhile, we are currently onboarding selected companies to the Machintel IPE platform. Spots are limited – please let us know of your interest and if any urgent need, send-in your message to us.</p>
<ul>
  <li>Save hours researching partnerships, alliances, and channels</li>
  <li>Discover which companies, including your competitors, are partnering with</li>
  <li>Find the best partners, alliances, and channels to grow your business</li>
</ul></div>
                <div class="p-10">
                    <form
        
          name="form"
          id="form"
          method="POST"
          accept-charset="UTF-8"
          enctype="multipart/form-data"
        >
          <input
            type="hidden"
            name="zf_referrer_name"
            value=""
          /><!-- To Track referrals , place the referrer name within the " " in the above hidden input field -->
          <input
            type="hidden"
            name="zf_redirect_url"
            value=""
          /><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field -->
          <input
            type="hidden"
            name="zc_gad"
            value=""
          /><!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM -->
          <div class="grid gap-4 lg:gap-6">
            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  name="Name_First"
                  fieldType="7"
                  class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="Name_Last"
                  fieldType="7"
                  class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                />
              </div>
            </div>
            <!-- End Grid -->

            <div>
              <input
                type="email"
                placeholder="Email"
                nname="Email"
                value=""
                fieldType="9"
                class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
              />
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Company"
                  name="SingleLine"
                  value=""
                  fieldType="1"
                  class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Phone"
                  compname="PhoneNumber"
                  name="PhoneNumber_countrycode"
                  phoneFormat="1"
                  isCountryCodeEnabled="false"
                  class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                />
              </div>
            </div>
            <!-- End Grid -->
          </div>
          <!-- End Grid -->

          <!-- Checkbox -->
          <div class="mt-3 flex">
            <div>
              <label for="remember-me" class="text-xs"
                >By submitting this form I have read and acknowledged the
                <a
                  class="text-blue-600 decoration-2 underline font-medium"
                  href="https://machintel.com/privacy-policy"
                  target="_blank"
                  >Privacy policy</a
                ></label
              >
            </div>
          </div>
          <!-- End Checkbox -->

          <div class="mt-6 grid">
            <button type="submit" class="btn rounded-md btn-primary-900">Submit</button>
          </div>
        </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.default-form {
  h2 {
    @apply text-accent text-xl;
  }
  h1 {
    @apply text-5xl;
    @apply mb-5;
    @apply font-bold;
    @apply leading-tight;
  }
  ul {
    list-style-type: square;
    @apply px-6;
  }
  li {
    @apply text-lg;
  }
  p {
    @apply text-xl;
  }
  #fullname {
    display: none;
  }
  .text-blue-600 {
    --tw-text-opacity: 1;
    color: #1c64f2;
    color: rgba(28, 100, 242, var(--tw-text-opacity));
}
}
</style>
