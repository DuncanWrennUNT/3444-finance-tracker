document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.querySelector("#password");
  const requirementsPanel = document.querySelector("#password-requirements");

  if (!passwordInput || !requirementsPanel) {
    return;
  }

  const requirements = {
    length: (password) => password.length >= 9,
    number: (password) => /[0-9]/.test(password),
    special: (password) => /[^A-Za-z0-9\s]/.test(password),
  };

  const updateRequirements = () => {
    const password = passwordInput.value;
    let passwordIsValid = true;

    Object.entries(requirements).forEach(([name, testRequirement]) => {
      const requirementItem = requirementsPanel.querySelector(`[data-requirement="${name}"]`);
      const requirementIsMet = testRequirement(password);

      requirementItem.classList.toggle("is-valid", requirementIsMet);
      passwordIsValid = passwordIsValid && requirementIsMet;
    });

    passwordInput.setCustomValidity(
      password.length > 0 && !passwordIsValid
        ? "Use at least 9 characters, including a number and a special character."
        : ""
    );

    requirementsPanel.classList.toggle(
      "is-visible",
      document.activeElement === passwordInput || (password.length > 0 && !passwordIsValid)
    );
  };

  passwordInput.addEventListener("focus", updateRequirements);
  passwordInput.addEventListener("input", updateRequirements);
  passwordInput.addEventListener("blur", updateRequirements);
});
