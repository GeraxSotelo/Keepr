using System;
using System.Collections.Generic;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultKeepsService
  {
    private readonly VaultKeepsRepository _repo;
    public VaultKeepsService(VaultKeepsRepository repo)
    {
      _repo = repo;
    }

    public void Create(VaultKeep newVaultKeep)
    {
      VaultKeep exists = _repo.Find(newVaultKeep);
      if (exists != null) { throw new Exception("Keep already in Vault"); }
      _repo.Create(newVaultKeep);
    }

    internal String Delete(VaultKeep vk)
    {
      var exists = _repo.Find(vk);
      if (exists == null) { throw new Exception("Invalid Id Combination"); }
      _repo.Delete(vk.Id);
      return "Successfully Deleted";
    }

  }
}