import Swal from "sweetalert2";

export default class NotificationService {

  static async inputKeepData(title = "Enter Inputs") {
    try {
      const { value: formValues } = await Swal.fire({
        title,
        html:
          `<form class="keep-form"">` +
          `<label class="mb-0">Keep Name <span style="color: red">*</span></label>` +
          `<input id="keepName" class="swal2-input" placeholder="Name">` +
          `<label class="mb-0">Description</label>` +
          `<input id="keepDescription" class="swal2-input" placeholder="Description">` +
          `<label class="mb-0">Image URL</label>` +
          `<input id="keepImg" class="swal2-input" placeholder="Image URL">` +
          `<label class="mb-0">Private Keep?</label>` +
          `<div class="switch_box box_1">
		       <input id="keepIsPrivate" type="checkbox" class="switch_1"></div>` +
          `<p>Public Keeps cannot be deleted once they are posted.</p>` +
          `<span style="color: red">*</span> indicates required field` +
          `</form>`,
        focusConfirm: false,
        preConfirm: () => {
          let keepName = document.getElementById("keepName").value;
          let keepDescription = document.getElementById("keepDescription").value;
          let keepImg = document.getElementById("keepImg").value;
          let keepisPrivate = document.getElementById("keepIsPrivate").checked;
          if (!keepName) {
            Swal.showValidationMessage("Please fill out required fields");
          }
          return [
            keepName,
            keepDescription,
            keepImg,
            keepisPrivate
          ];
        }
      });
      if (formValues) {
        return {
          Name: formValues[0],
          Description: formValues[1],
          Img: formValues[2],
          IsPrivate: formValues[3],
        };
      }
    } catch (error) {
      return error;
    }
  }

  static async editKeep(title = "Enter Inputs", keep) {
    try {
      const { value: formValues } = await Swal.fire({
        title,
        html:
          `<form class="keep-form"">` +
          `<label class="mb-0">Keep Name <span style="color: red">*</span></label>` +
          `<input id="keepName" class="swal2-input" placeholder="Name" value="${keep.name}">` +
          `<label class="mb-0">Description</label>` +
          `<input id="keepDescription" class="swal2-input" placeholder="Description" value="${keep.description}">` +
          `<label class="mb-0">Image URL</label>` +
          `<input id="keepImg" class="swal2-input" placeholder="Image URL" value="${keep.img}">` +
          `<span style="color: red">*</span> indicates required field` +
          `</form>`,
        focusConfirm: false,
        preConfirm: () => {
          let keepName = document.getElementById("keepName").value;
          let keepDescription = document.getElementById("keepDescription").value;
          let keepImg = document.getElementById("keepImg").value;
          if (!keepName) {
            Swal.showValidationMessage("Please fill out required fields");
          }
          return [
            keepName,
            keepDescription,
            keepImg,
          ];
        }
      });
      if (formValues) {
        return {
          name: formValues[0],
          description: formValues[1],
          img: formValues[2],
        };
      }
    } catch (error) {
      return error;
    }
  }

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

  static async pickVault(vaults) {
    try {
      const { value: vault } = await Swal.fire({
        title: "Which Vault would you like your Keep in?",
        input: 'select',
        inputOptions: { ...vaults },
        inputPlaceholder: 'None',
        showCancelButton: true,
      })

      if (vault) {
        return vault;
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