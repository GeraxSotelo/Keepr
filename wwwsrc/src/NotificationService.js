import Swal from "sweetalert2";

export default class NotificationService {
  static async inputVaultData(title = "Enter Inputs", vaultData) {
    try {
      const { value: formValues } = await Swal.fire({
        title,
        html:
          `<form class="vault-form"">` +
          `<label class="mb-0">Vault Name <span style="color: red">*</span></label>` +
          `<input id="vaultName" class="swal2-input" value="${vaultData.name ||
          ""}" placeholder="Name">` +
          `<label class="mb-0">Description</label>` +
          `<input id="vaultDescription" class="swal2-input" value="${vaultData.description ||
          ""}" placeholder="Description">` +
          `<span style="color: red">*</span> indicates required field` +
          `</form>`,
        focusConfirm: false,
        preConfirm: () => {
          let vaultName = document.getElementById("vaultName").value;
          let vaultDescription = document.getElementById("vaultDescription").value;
          if (!vaultName) {
            Swal.showValidationMessage("Please fill out required fields");
          }
          return [
            vaultName,
            vaultDescription
          ];
        }
      });
      if (formValues) {
        return {
          Name: formValues[0],
          Description: formValues[1]
        };
      }
    } catch (error) {
      return error;
    }
  }

  static async errorMessage(text = "Oops") {
    try {
      await Swal.fire({
        icon: "error",
        text
      });
    } catch (error) {
      return false;
    }
  }
}