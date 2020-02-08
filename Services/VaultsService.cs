using System;
using System.Collections.Generic;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultsService
  {
    private readonly VaultsRepository _repo;
    public VaultsService(VaultsRepository repo)
    {
      _repo = repo;
    }
    public IEnumerable<Vault> Get(string userId)
    {
      return _repo.Get(userId);
    }

    internal Vault GetById(int id)
    {
      var found = _repo.GetById(id);
      if (found == null) { throw new Exception("Invalid Id"); }
      return found;
    }
    public Vault Create(Vault newVault)
    {
      newVault.Id = _repo.Create(newVault);
      return newVault;
    }

    // internal Vault Edit(Vault update)
    // {
    //   var found = _repo.GetById(update.Id);
    //   if (found == null) { throw new Exception("Invalid Id Bro"); }
    //   _repo.Edit(update);
    //   return update;
    // }

    internal String Delete(int id)
    {
      var found = _repo.GetById(id);
      if (found == null) { throw new Exception("Invalid Id"); }
      _repo.Delete(id);
      return "Successfully Deleted";
    }

  }
}