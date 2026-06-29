module.exports = {
  extends: ["react-app"],
  rules: {
    // allowReferrer: true lets us use rel="noopener" without rel="noreferrer",
    // so the Referer header is still sent to linked sites for referral tracking.
    "react/jsx-no-target-blank": ["warn", { allowReferrer: true }],
  },
};
