using System;
using System.Collections.Generic;
using System.Security.Claims;
using Keepr.Models;
using Keepr.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Keepr.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class VaultKeepsController : ControllerBase
  {
    private readonly VaultKeepsService _vks;
    public VaultKeepsController(VaultKeepsService vks)
    {
      _vks = vks;
    }

    [HttpGet("{id}/keeps")] //NOTE TO PASS TESTS
    [Authorize]
    public ActionResult<IEnumerable<Keep>> Get(int id)
    {
      try
      {
        return Ok(_vks.GetKeeps(id));
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [HttpPost]
    [Authorize]
    public ActionResult<String> Create([FromBody] VaultKeep newVaultKeeps)
    {
      try
      {
        var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
        newVaultKeeps.UserId = userId;
        _vks.Create(newVaultKeeps);
        return Ok("Success");
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [HttpPut("removekeep")]
    [Authorize]
    public ActionResult<String> Delete([FromBody] VaultKeep vk)
    {
      try
      {
        var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
        vk.UserId = userId;
        return Ok(_vks.Delete(vk));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [HttpDelete("{vaultId}/keeps/{keepsId}")]  //NOTE TO PASS TEST
    [Authorize]
    public ActionResult<VaultKeep> DeleteVK(int vaultId, int keepId)
    {
      try
      {
        return _vks.DeleteVK(vaultId, keepId);
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }

  }
}