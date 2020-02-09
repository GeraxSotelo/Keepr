using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class KeepsService
  {
    private readonly KeepsRepository _repo;
    public KeepsService(KeepsRepository repo)
    {
      _repo = repo;
    }
    public IEnumerable<Keep> Get()
    {
      return _repo.Get();
    }

    internal Keep GetById(int id)
    {
      var found = _repo.GetById(id);
      if (found == null) { throw new Exception("Invalid Id"); }
      return found;
    }

    internal IEnumerable<Keep> GetKeepsByVaultId(int vaultId)
    {
      return _repo.GetKeepsByVaultId(vaultId);
    }

    public Keep Create(Keep newKeep)
    {
      if (newKeep.Img == "")
      {
        newKeep.Img = "https://via.placeholder.com/150";
      }
      newKeep.Id = _repo.Create(newKeep);
      return newKeep;
    }

    internal Keep Edit(Keep update)
    {
      var found = _repo.GetById(update.Id);
      if (found == null) { throw new Exception("Invalid Id Bro"); }
      _repo.Edit(update);
      return update;
    }

    internal String Delete(int id)
    {
      var found = _repo.GetById(id);
      if (found == null) { throw new Exception("Invalid Id"); }
      _repo.Delete(id);
      return "Successfully Deleted";
    }
  }
}